<template>
    <button @click="afiliacion()">Afiliacion</button>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
    computed: {
        ...mapState('auth', ['user']),
        ...mapState('carrito', ['uuid', 'items']),
    },
    methods: {
        ...mapActions('carrito', ['addAfiliadoCarrito']),
        async afiliacion() {
            if (this.revisarEnCarrito()) {
                Swal.fire({
                    position: "bottom-end",
                    title: "Ya tiene una afiliacion en el carrito",
                    background: "#0085FF",
                    color: "#fff",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: false
                });
                return
            }
            if (this.user.data.afiliado === false) {
                Swal.fire({
                    title: 'No esta afiliado',
                    text: 'Necesita agregar una afiliacion para poder comprar',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#31212b',
                    showDenyButton: true,
                    denyButtonText: `No kelo`
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const data = {
                            carri_item_cantidad: 1,
                            carr_uuid: this.uuid,
                            fk_carri_item_afil: null
                        }
                        try {
                            await this.addAfiliadoCarrito(data)
                            Swal.fire({
                                position: "bottom-end",
                                title: "Añadido al carrito",
                                background: "#42FF00",
                                color: "#fff",
                                showConfirmButton: false,
                                timer: 1500,
                                backdrop: false
                            });
                        } catch (error) {
                            console.log(error)
                            Swal.fire({
                                position: "bottom-end",
                                title: "Error al añadir al carrito",
                                background: "#F94646",
                                color: "#fff",
                                showConfirmButton: false,
                                timer: 1500,
                                backdrop: false
                            });
                        }
                    } else if (result.isDenied) {
                        Swal.fire('No afiliado', '', 'info')
                    }
                });
            }
        },
        revisarEnCarrito() {
            const item = this.items.find((item) => {
                console.log(item)
                if (!item.afiliado) return
                if (item.afiliado.id == 2) {
                    return item
                }
            })
            if (item) {
                return true
            } else {
                return false
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>