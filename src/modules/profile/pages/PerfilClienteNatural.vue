<template>
    <div class="">
        <h1>Mi perfil</h1>
        <div class="hola">Hola, {{ user.data.nombre }}</div>
    </div>
    <Afiliado></Afiliado>
    <Logout></Logout>
    <button @click="changeShowVentas">Ventas</button>
    <Ventas @on-close="changeShowVentas" v-if="showVentas" />
</template>

<script>
import Logout from '../components/Logout'
import Afiliado from '../components/Afiliado'
import Ventas from '../components/Ventas'
export default {
    data() {
        return {
            showVentas: false
        }
    },
    components: {
        Logout,
        Afiliado,
        Ventas
    },
    computed: {
        ...mapState('auth', ['user'])
    },
    methods: {
        changeShowVentas() {
            this.showVentas = !this.showVentas
        },
    }
}
</script>

<style></style>