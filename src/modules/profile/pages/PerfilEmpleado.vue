<template>
    <div v-if="isLoading">Cargando</div>
    <div class="main-container" v-else>
        <div class="filtrado-container">  
            <div class="busqueda">
                <div class="titulo-barras">Fecha Inicial</div>
                <input class="barra-busqueda" type="text" placeholder="aaaa-mm-dd" v-model="term"
                @keypress.enter="cargarRonesConBusqueda">
            </div>
            <div class="busqueda">
                <div class="titulo-barras">Fecha Final</div>
                <input class="barra-busqueda" type="text" placeholder="aaaa-mm-dd" v-model="term"
                @keypress.enter="cargarRonesConBusqueda">
            </div>
            <button class="button-18">Filtrar</button>
        </div>
        <h1>Dashboard</h1>
        <div class="dashboard-container">
            <div class="left-side">
                <div class="top-parroquias">
                    <h2><b>Top 10 Parroquias</b> - Ventas Online</h2>
                    <h3></h3>
                    <ul>
                        <li v-for="parroquia in topParroquias" :key="parroquia.id"><span>{{ parroquia.parroquia }}</span>==>
                            <span>{{ parroquia.cantidad }}</span>
                        </li>
                    </ul>
                </div>
                <hr>
                <div class="ordenes-status">
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
                </div>

            </div>
            <div class="right-side">
                <div class="canvas-box">
                    <canvas id="chart"></canvas>
                </div>
                <div class="top-producto">
                    <h2>Producto mas vendido</h2>
                    <div v-if="productoMasVendido">{{ productoMasVendido.nombre }} ==> {{ productoMasVendido.cantidad }}</div>
                </div>
                <div class="info-restante">
                    <h2>Ventas realizadas este mes: {{ ventasEsteMes }} </h2>
                    <h2>Puntos canjeados ==> {{ puntosCanjeados }}</h2>
                    <h2>Puntos otorgados ==> {{ puntosOtorgados }}</h2>
                    <h2>Ordenes atrasadas ==> {{ ordenesAtrasadas }}</h2>
                </div>
            </div>
        </div>
    </div>
    <Logout></Logout>
    
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

.filtrado-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 20px;
    padding: 20px 40px;
}

.busqueda {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    width: 200px;
}

.titulo-barras {
    color: #31212B;
    width: 100%;
    text-align: left;
    font-size: 24px;
    font-weight: bold;
}

.barra-busqueda {
    height: 56px;
    border: 3px solid #31212B;
    border-radius: 16px;
    padding-left: 20px ;
}

.dashboard-container {
    display: flex;

}

.left-side {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 20px 40px;
}

.top-parroquias {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    margin-bottom: 20px;
}

.top-parroquias ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #000;
}

.top-parroquias h2 {
    font-family: 'Inter', sans-serif;
    color: #31212B;
}

.right-side {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 20px;
}







.button-18 {
    margin-left: 20px ;
    align-items: center;
    background-color: #31212B;
    border: 0;
    border-radius: 100px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 800;
    justify-content: center;
    line-height: 20px;
    height: 56px;
    max-width: 480px;
    min-height: 20px;
    min-width: 0px;
    overflow: hidden;
    padding: 0px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    touch-action: manipulation;
    transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;

    &.catalogo {
        font-family: 'Inter', 'sans-serif';
        font-size: 16px;
        font-weight: 800;
    }

    &:hover,
    :focus {
        background-color: #e6bd7f;
        color: #000;
    }

    &:active {
        background: #c09e6a;
        color: rgb(255, 255, 255, .7);
    }

    &:disabled {
        cursor: not-allowed;
        background: rgba(0, 0, 0, .08);
        color: rgba(0, 0, 0, .3);
    }
}

</style>