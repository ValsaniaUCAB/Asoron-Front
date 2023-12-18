<template>
    <div>Soy un detalle de Evento</div>
    <div v-if="!isLoading">
        <li v-for="ron in evento.rones">
            <ron-minimal :ron="ron"></ron-minimal>
        </li>
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
            isLoading: true,
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
        this.isLoading = false
    }
}
</script>

<style scoped>
li {
    list-style: none;
}
</style>