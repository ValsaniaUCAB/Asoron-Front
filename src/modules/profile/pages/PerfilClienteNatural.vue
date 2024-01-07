<template>
    <div v-if="isLoading"></div>

    <div v-else>
        <div class="">
            <h1>Mi perfil</h1>
            <div class="hola">Hola, {{ user.data.nombre }}!</div>
        </div>
        <div class="info">
            <ul>
                <li>Nombres: <span>{{ user.data.nombre }}</span> <span>{{ user.data.segundoNombre }}</span></li>
                <li>Apellidos: <span>{{ user.data.apellido }}</span> <span>{{ user.data.segundoApellido }}</span></li>
                <li>Cedula: {{ user.data.cedula }}</li>
                <li>Correo Electronico: {{ user.email }}</li>
                <li>Rif: {{ user.data.rif }}</li>
                <li>
                    Direccion:
                    {{ (user.data.lugar.estado).toLocaleLowerCase() }},
                    {{ (user.data.lugar.municipio).toLocaleLowerCase() }},
                    {{ (user.data.lugar.parroquia).toLocaleLowerCase() }},
                    {{ user.data.direccion }}
                </li>
                <li>Afiliacion: <span v-if="user.data.afiliado === true">Activa</span> <span v-else>No activa</span></li>
            </ul>
        </div>
        <div>
            <h2>Afiliacion</h2>
            <Afiliado></Afiliado>
        </div>
        <div>
            <h2>Telefono</h2>
            <ul>
                <li v-for="telefono in user.data.telefono">{{ telefono.codigo }} - {{ telefono.telefono }}</li>
            </ul>
            <button>Añadir Telefono</button>
        </div>
        <div>
            <h2>Compras</h2>
            <button @click="changeShowVentas()">Ventas</button>
            <Ventas v-if="showVentas" @on-close="changeShowVentas" />
        </div>
        <div>
            <h2>miscelaneos</h2>
            <Logout></Logout>
        </div>
    </div>
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
    computed: {
        ...mapState('auth', ['user']),
        isLoading() {
            if (this.user) {
                return false
            } else {
                return true
            }
        }
    },
    methods: {
        changeShowVentas() {
            this.showVentas = !this.showVentas
        },
    }
}
</script>

<style></style>