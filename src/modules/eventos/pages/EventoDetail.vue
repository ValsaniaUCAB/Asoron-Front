<template>
    <div>Soy un detalle de Evento</div>
    <!-- <div v-if="!loading">
        <h1>{{ evento.nombre }}</h1>
        <img src="../assets/placeholder evento 1.webp">
        <h4>Del {{ evento.fechaIni }} al {{ evento.fechaFin }}</h4>
        <p>Direccion: {{ evento.direccion }}</p>
        <p>{{ evento.descripcion }}</p>

    </div> -->
</template>

<script>
import getEventDetail from '../helpers/getEventDetail'
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            evento: null
        }
    },
    methods: {
        async getEventDetail(id) {
            this.evento = null
            this.evento = await getEventDetail(id)
        },
    },
    mounted() {
        this.evento = this.getEventDetail(this.id)
    }
}
</script>

<style scoped>
img {
    border-radius: 20px;
    padding: 15px;
    height: 400px
}
</style>