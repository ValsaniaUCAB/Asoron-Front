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
                        } catch (error) {
                            console.log(error)
                        }
                    } else if (result.isDenied) {
                        Swal.fire('No afiliado', '', 'info')
                    }
                });
            }
        }

        // async sendLogout() {
        //     new Swal({
        //         title: 'Espere por favor',
        //         allowOutsideClick: false,
        //     })
        //     Swal.showLoading()
        //     await this.logout()
        //     await this.vaciarCarrito()
        //     Swal.fire({
        //         title: 'Success',
        //         text: 'Cerró sesión con éxito',
        //         icon: 'success',
        //         confirmButtonText: 'OK',
        //         confirmButtonColor: '#31212b',
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             this.$router.push({ name: 'home' });
        //         }
        //     });
        // }
    },
}
</script>

<style lang="scss" scoped></style>