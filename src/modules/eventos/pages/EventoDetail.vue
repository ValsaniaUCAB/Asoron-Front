<template>
    <div>Soy un detalle de Evento</div>
    <h1 class="container" v-if="!evento">Cargando... Por favor Espere</h1>
    <div v-else>
        <div class="evento-container">
            <div v-if="hasImage" class="test-image" :style="{ backgroundImage: `url(${evento.images[0].img_url})` }">
            </div>
            <div v-else class="test-random-image">
                <h1> {{ "EVENTO " + evento.nombre.toUpperCase() }} </h1>
            </div>
            <div class="info">
                <h1>{{ evento.nombre }}</h1>
                <p>{{ evento.descripcion }}</p>
                <p>Desde el {{ evento.fechaInicio }} hasta el {{ evento.fechaFin }}</p>
                <p>Celebrado en: {{ evento.direccion }}, {{ evento.lugar.parroquia }}, {{ evento.lugar.municipio }}, {{
                    evento.lugar.estado }}</p>
            </div>
        </div>
        <div class="box">
            <div class="rones-container">
                <h1> Lista de rones a presentar</h1>
                <li v-for="ron in evento.rones">
                    <ron-minimal :ron="ron" :clickeable="false"></ron-minimal>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import getEventDetail from '../helpers/getEventDetail'
import RonMinimal from '@/modules/catalogo/components/RonMinimal'
export default {
    components: {
        RonMinimal
    },
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
    computed: {
        hasImage() {
            if (this.evento.images[0]) return true
            else return false
        }
    },
    mounted() {
        this.getEventDetail(this.id)
    }
}
</script>

<style lang="scss" scoped>
.evento-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
}

.test-image {
    width: 480px;
    height: 480px;
    background-size: cover;
    background-position: center;
}

.test-random-image {
    width: 480px;
    height: 480px;
    background: rgb(2, 0, 36);
    background: linear-gradient(137deg, rgba(2, 0, 36, 1) 0%, rgba(0, 212, 255, 1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.test-random-image h1 {
    color: #fff;
    font-family: 'Brothers', sans-serif;
    font-weight: 800;
    text-align: center;
}

.info {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 50px;
    margin-right: 50px;
    color: black;
    padding-top: 40px;

    & h1 {
        width: 564px;
        font-size: 36px;
        font-weight: 700;
        font-family: 'Brothers';
        margin-bottom: 20px;
        text-align: left;
    }

    & p {
        width: 564px;
        text-align: left;
    }
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 60px;
}

.rones-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1144px;

    & h1 {
        width: 564px;
        font-size: 36px;
        font-weight: 700;
        font-family: 'Brothers';
        margin-bottom: 20px;
        text-align: left;
    }
}

li {
    list-style: none;
}
</style>