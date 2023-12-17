<template>
    <button @click="sendLogout()">Logout</button>
</template>

<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
    methods: {
        ...mapActions('auth', ['logout']),
        async sendLogout() {
            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false,
            })
            Swal.showLoading()
            await this.logout()
            Swal.fire('Success', 'Cerró sesión con exito', 'success', this.$router.push({ name: 'home' }))
        }
    },

}
</script>

<style></style>