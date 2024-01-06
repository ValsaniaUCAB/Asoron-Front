<template>
    <h1>Soy Perfil del Cliente Natural</h1>
    <Afiliado></Afiliado>
    <Logout></Logout>
    <button @click="changeShowVentas()">Ventas</button>
    <Ventas v-if="showVentas" />
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
    methods: {
        changeShowVentas() {
            this.showVentas = true
        }
    }
}
</script>

<style></style>