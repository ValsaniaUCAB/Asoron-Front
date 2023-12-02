<template>
    <div>Soy un detalle de Evento</div>
    <div v-if="!loading">
        <h1>{{ evento.nombre }}</h1>
        <img src="../assets/placeholder evento 1.webp">
        <h4>Del {{ evento.fechaIni }} al {{ evento.fechaFin }}</h4>
        <p>Direccion: {{ evento.direccion }}</p>
        <p>{{ evento.descripcion }}</p>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            loading: true,
            evento: null
        }
    },
    computed: {
        ...mapState('eventos', ['eventosList'])
    },
    methods: {
        buscar(id) {
            for (const evento of this.eventosList) {
                if (evento.id === id) {
                    this.loading = false
                    return evento
                }
            }
        }
    },
    mounted() {
        this.evento = this.buscar(this.id)
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