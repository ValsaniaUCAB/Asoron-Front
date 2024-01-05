<template>
    <button @click="sendLogout()">Logout</button>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Swal from 'sweetalert2'

export default {
    methods: {
        ...mapMutations('carrito', ['endCarrito']),
        ...mapActions('auth', ['logout']),
        async sendLogout() {
            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false,
            })
            Swal.showLoading()
            await this.logout()

            Swal.fire({
                title: 'Success',
                text: 'Cerró sesión con éxito',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#31212b',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$router.push({ name: 'home' });
                    this.endCarrito()
                }
            });
        }
    },
}
</script>

<style lang="scss" scoped></style>