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
            <li>
                Direccion fisica:
                {{ (user.data.lugarFisico.estado).toLocaleLowerCase() }},
                {{ (user.data.lugarFisico.municipio).toLocaleLowerCase() }},
                {{ (user.data.lugarFisico.parroquia).toLocaleLowerCase() }},
                {{ user.data.direccionFisica }}
            </li>
            <li>
                Direccion fiscal:
                {{ (user.data.lugarFiscal.estado).toLocaleLowerCase() }},
                {{ (user.data.lugarFiscal.municipio).toLocaleLowerCase() }},
                {{ (user.data.lugarFiscal.parroquia).toLocaleLowerCase() }},
                {{ user.data.direccionFiscal }}
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
</template>

<script>
import Logout from '../components/Logout'
import Afiliado from '../components/Afiliado'
import Ventas from '../components/Ventas'
import { mapState } from 'vuex'
import CodigoTelefono from '@/modules/auth/components/CodigoTelefono';

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