<template>
    <button @click="afiliacion()">Afiliacion</button>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
    computed: {
        ...mapState('auth', ['user']),
        ...mapState('carrito', ['uuid']),
    },
    methods: {
        ...mapActions('carrito', ['addAfiliadoCarrito']),
        async afiliacion() {
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
                        }
                    } else if (result.isDenied) {
                        Swal.fire('No afiliado', '', 'info')
                    }
                });
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>