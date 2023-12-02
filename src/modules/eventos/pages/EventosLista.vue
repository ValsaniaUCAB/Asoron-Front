<template>
    <div>Soy una lista de Eventos</div>
    <div class="eventos mx-5 col d-flex">
        <li v-for="evento in eventosList">
            <Evento :evento="evento" />
        </li>
    </div>
</template>

<script>
import Evento from '../components/Evento.vue';
import { mapState } from 'vuex';

export default {
    components: {
        Evento
    },
    computed: {
        ...mapState('eventos', ['eventosList'])
    }

}
</script>

<style scoped>
.eventos {
    flex-direction: column;
    /* flex-wrap: nowrap; */
    align-items: flex-start;
}

li {
    margin: 8px;
    width: 100%;
    list-style-type: none;
}

a {
    color: #2c3e50;
}
</style>