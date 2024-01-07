<template>
    <div class="box">
        <button class="cancel-btn" @click="$emit('on-close')">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#31212b"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        <div v-if="isLoading">cargando</div>
        <div v-if="!isLoading && ventasList.length === 0">No ha realizado ninguna compra :C</div>
        <div v-if="!isLoading && ventasList.length > 0">
            <table>
                <thead>
                    <tr>
                        <th>Seleccion</th>
                        <th>Fecha</th>
                        <th>Monto</th>
                        <th>Direccion</th>
                        <th>Orden Recibida</th>
                        <th>Orden Aprobada</th>
                        <th>Orden En Camino</th>
                        <th>Orden Entregada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="venta in ventasList" :key="venta.id">
                        <td><input type="radio" name="venta" v-model="seleccionVenta" :id="venta.id" :value="venta.id"></td>
                        <td>{{ venta.fecha }}</td>
                        <td>{{ venta.montoTotal }}</td>
                        <td>{{ venta.direccion }}</td>
                        <td>
                            <svg v-if="venta.status[0].status === true" xmlns="http://www.w3.org/2000/svg" width="36"
                                height="36" viewBox="0 0 24 24" fill="none" stroke="#42FF00" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                                fill="none" stroke="#31212b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </td>
                        <td>
                            <svg v-if="venta.status[1].status === true" xmlns="http://www.w3.org/2000/svg" width="36"
                                height="36" viewBox="0 0 24 24" fill="none" stroke="#42FF00" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                                fill="none" stroke="#31212b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </td>
                        <td>
                            <svg v-if="venta.status[2].status === true" xmlns="http://www.w3.org/2000/svg" width="36"
                                height="36" viewBox="0 0 24 24" fill="none" stroke="#42FF00" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                                fill="none" stroke="#31212b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </td>
                        <td>
                            <svg v-if="venta.status[3].status === true" xmlns="http://www.w3.org/2000/svg" width="36"
                                height="36" viewBox="0 0 24 24" fill="none" stroke="#42FF00" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                                fill="none" stroke="#31212b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button @click="descargarVenta()">Descargar Venta</button>
        </div>
    </div>
</template>

<script>

import getVentas from '../helpers/getVentas'
import getVentaPdf from '../helpers/getVentaPdf'
import Swal from 'sweetalert2'

export default {
    emits: ['on-close'],
    data() {
        return {
            isLoading: true,
            ventasList: [],
            seleccionVenta: null
        }
    },
    methods: {
        async getVentas() {
            this.isLoading = true
            this.ventasList = await getVentas()
            this.isLoading = false
        },
        async descargarVenta() {
            Swal.fire({
                position: "bottom-end",
                title: "Descargando Factura",
                background: "#0085FF",
                color: "#fff",
                showConfirmButton: false,
                timer: 1500,
                backdrop: false
            });
            const pdf = await getVentaPdf(this.seleccionVenta)
            const url = window.URL.createObjectURL(new Blob([pdf]));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Factura.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }
    },
    mounted() {
        this.getVentas()
    }
}
</script>

<style scoped lang="scss">
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 120px;
    border-radius: 50px;
    justify-content: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.cancel-btn {
    background: none;
    border: none;
    padding: 0;

}
</style>