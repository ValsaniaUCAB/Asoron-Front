<template>
    <div v-if="isLoading">Cargando</div>
    <div v-else>
        <h1>Dashboard</h1>
        <h2>Top 10 Parroquias</h2>
        <h3>Ventas Online</h3>
        <ul>
            <li v-for="parroquia in topParroquias"><span>{{ parroquia.parroquia }}</span>==>
                <span>{{ parroquia.cantidad }}</span>
            </li>
        </ul>
        <h2>Producto mas vendido</h2>
        <div v-if="productoMasVendido">{{ productoMasVendido.nombre }} ==> {{ productoMasVendido.cantidad }}</div>
        <h2>Ventas realizadas este mes: {{ ventasEsteMes }} </h2>
        <h2>Ordenes por status</h2>
        <ul v-if="ordenesStatus">
            <li>
                <span>Orden Recibida</span><span>{{ ordenesStatus.ordenRecibida }}</span>
            </li>
            <li>
                <span>Orden Aprobada</span><span>{{ ordenesStatus.ordenAprovada }}</span>
            </li>
            <li>
                <span>Orden En Camino</span><span>{{ ordenesStatus.ordenEnCamino }}</span>
            </li>
            <li>
                <span>Orden Entregada</span><span>{{ ordenesStatus.ordenEntregada }}</span>
            </li>
        </ul>
        <h2>Puntos canjeados ==> {{ puntosCanjeados }}</h2>
        <h2>Puntos otorgados ==> {{ puntosOtorgados }}</h2>
        <h2>Ordenes atrasadas ==> {{ ordenesAtrasadas }}</h2>
        <!-- <table>
            <thead class="head">
                <tr class="head-fila">
                    <th class="head-element">Parroquia</th>
                    <th class="head-element">Cantidad</th>
                </tr>
            </thead>
            <tbody class="body-table">
                <tr class="fila" v-for="parroquia in arrayPrueba">
                    <td>{{ parroquia.parroquia }}</td>
                    <td>{{ parroquia.cantidad }}</td>
                </tr>
            </tbody>
        </table> -->
    </div>
    <Logout></Logout>
    <div class="canvas-box">
        <canvas id="chart"></canvas>
    </div>
</template>

<script>
import Logout from '../components/Logout'
import Chart from 'chart.js/auto';
import {
    getTop10Parroquias, getProductoMasVendido, getTotalVentas, getNumeroStatus,
    getPuntosCanjeados, getPuntosOtorgados, getOrdenesAtrasadas, getTop10Productos
} from '../helpers/getDashboardData'
import { mapState } from 'vuex';

export default {
    components: {
        Logout
    },
    data() {
        return {
            fechaInicio: '2024-01-01',
            fechaFin: '2024-01-31',

            topParroquias: null,
            productoMasVendido: null,
            ventasEsteMes: null,
            ordenesStatus: null,
            puntosCanjeados: null,
            puntosOtorgados: null,
            ordenesAtrasadas: null,
            productosTop: null,
        }
    },
    methods: {
        async getParroquiasTop() {
            this.topParroquias = await getTop10Parroquias(this.fechaInicio, this.fechaFin)
        },
        async getProducto() {
            this.productoMasVendido = await getProductoMasVendido(this.fechaInicio, this.fechaFin)
        },
        async getVentasEsteMes() {
            this.ventasEsteMes = await getTotalVentas(this.fechaInicio, this.fechaFin)
        },
        async getOrdenesStatus() {
            this.ordenesStatus = await getNumeroStatus(this.fechaInicio, this.fechaFin)
        },
        async getCanjeados() {
            this.puntosCanjeados = await getPuntosCanjeados(this.fechaInicio, this.fechaFin)
        },
        async getOtorgados() {
            this.puntosOtorgados = await getPuntosOtorgados(this.fechaInicio, this.fechaFin)
        },
        async getAtrasadas() {
            this.ordenesAtrasadas = await getOrdenesAtrasadas(this.fechaInicio, this.fechaFin)
        },
        async getProductosTop() {
            this.productosTop = await getTop10Productos(this.fechaInicio, this.fechaFin)
            this.getChart()
        },
        getProductosArray() {
            let array = []
            this.productosTop.forEach(producto => {
                array.push(producto.nombre)
            });
            console.log(array)
            return array
        },
        getProductoCantidad() {
            let array = []
            this.productosTop.forEach(producto => {
                array.push(producto.cantidad)
            });
            return array
        },
        getChart() {
            const ctx = document.getElementById('chart')
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.getProductosArray(),
                    datasets: [{
                        label: 'Cantidad de Productos',
                        data: this.getProductoCantidad(),
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        },
    },
    computed: {
        ...mapState('auth', ['user']),
        isLoading() {
            if (this.user) {
                this.getParroquiasTop()
                this.getProducto()
                this.getVentasEsteMes()
                this.getOrdenesStatus()
                this.getCanjeados()
                this.getOtorgados()
                this.getAtrasadas()
                this.getProductosTop()
                return false
            } else {
                return true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.head {
    background-color: #31212B;
    color: white;
    padding: 10px;
}

.head-element {
    padding: 10px 20px;
}

.canvas-box {
    width: 700px
}
</style>