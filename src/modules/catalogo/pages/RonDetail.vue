<template>
    <div class="container"></div>
    <h1>Detalle</h1>
    <h1 v-if="!ronDetallado">Cargando... Por favor Espere</h1>
    <div v-else>
        <img :src="ronDetallado.images[0].img_url" />
        <h3>{{ ronDetallado.ron_nombre }}</h3>
        <p>{{ ronDetallado.ron_descripcion }}</p>
        <h4>Metodos para Servir</h4>
        <div v-for="servir in ronDetallado.comoservir">
            Titulo: {{ servir.coctel }}
            <p>Metodo: {{ servir.como_preparar }}</p>
        </div>
        <h4>Sensaciones:</h4>
        <div v-for="sensacion in ronDetallado.sensancion">
            <p>{{ sensacion.sensacion }}</p>
        </div>
    </div>
</template>

<script>

import getRonDetail from '@/modules/catalogo/helpers/getRonDetail'
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            ronDetallado: null
        }
    },
    methods: {
        async getRonDetail(id) {
            this.ronDetallado = await getRonDetail(id)
            console.log(this.ronDetallado)
        }
    },
    mounted() {
        this.getRonDetail(this.id)

    }

}
</script>

<style>
img {
    height: 500px;
    width: 500px;
}
</style>