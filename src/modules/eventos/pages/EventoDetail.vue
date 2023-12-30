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
                <div v-if="evento.entradas.length > 0">
                    <p>Entradas disponibles:</p>
                    <div class="entrada" v-for="entrada in evento.entradas">
                        <span>{{ entrada.nombre }}</span><span>${{ entrada.precio }}</span>
                    </div>
                    <button class="button-18">Comprar Entrada</button>
                </div>
            </div>
        </div>
        <div class="box">
            <h1> Lista de rones a presentar</h1>
            <div class="rones-container">
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

    & h1 {
        width: 564px;
        font-size: 36px;
        font-weight: 700;
        font-family: 'Brothers';
        margin-bottom: 20px;
        text-align: left;
    }
}

.rones-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 1144px;
}

.entrada {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 564px;
    margin-bottom: 10px;

}

.button-18 {
    align-items: center;
    background-color: #FDD08D;
    border: 0;
    border-radius: 100px;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 800;
    justify-content: center;
    line-height: 20px;
    max-width: 480px;
    min-height: 40px;
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

li {
    list-style: none;
}
</style>