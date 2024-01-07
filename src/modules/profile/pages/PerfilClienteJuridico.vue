<template>
    <div v-if="isLoading">
        Cargando
    </div>
    <div class="" v-else>
        <h2>Mi perfil</h2>
        <div class="hola">Hola, {{ user.data.denominacionComercial }}</div>
    </div>
    <div class="info">
        <ul>
            <li>Rif: {{ user.data.rif }}</li>
            <li>Denominacion Comercial: {{ user.data.denominacionComercial }}</li>
            <li>Razon Social: {{ user.data.razonSocial }}</li>
            <li>Correo Electronico: {{ user.email }}</li>
            <li>Web: {{ user.data.web }}</li>
            <li>Tipo de Localidad: {{ user.data.tipo }}</li>
        </ul>
    </div>
    <Afiliado></Afiliado>
    <Logout></Logout>
    <button @click="changeShowVentas()">Ventas</button>
    <Ventas v-if="showVentas" @on-close="changeShowVentas" />
</template>

<script>
import Logout from '../components/Logout'
import Afiliado from '../components/Afiliado'
import Ventas from '../components/Ventas'
import { mapState } from 'vuex'

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
            this.showVentas = !this.showVentas
        },
    },
    computed: {
        ...mapState('auth', ['user']),
        isLoading() {
            if (this.user) {
                return false
            } else {
                return true
            }
        }
    }
}
</script>

<style></style>