<template>
    <h1>Soy Perfil del Empleado</h1>
    <Logout></Logout>
    <table>
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
    </table>
    <div class="canvas-box">
        <canvas id="chart"></canvas>
    </div>
</template>

<script>
import Logout from '../components/Logout'
import Chart from 'chart.js/auto';

export default {
    components: {
        Logout
    },
    data() {
        return {
            arrayPrueba: [{ parroquia: 'San Juan', cantidad: 150 }, { parroquia: 'El Paraiso', cantidad: 100 }],
            arrayPrueba2: [
                {
                    ron: 'Santa Teresa',
                    cantidad: 150,
                },
                {
                    ron: 'Cacique',
                    cantidad: 200
                },
                {
                    ron: 'Pampero',
                    cantidad: 100
                }
            ]
        }
    },
    methods: {
        getArrayRon() {
            return this.arrayPrueba2.map(ron => ron.ron)
        },
        getArrayCantidad() {
            return this.arrayPrueba2.map(ron => ron.cantidad)
        }
    },
    mounted() {
        const ctx = document.getElementById('chart')
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.getArrayRon(),
                datasets: [{
                    label: '',
                    data: this.getArrayCantidad(),
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