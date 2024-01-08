<template>
    <div class="eventos" v-if="isLoading">Cargan2</div>
    <div class="eventos">
        <CDropdown>
            <CDropdownToggle>{{ tipo }}</CDropdownToggle>
            <CDropdownMenu style="width:100%;">
                <CDropdownItem @click="changeToActual">Eventos Actuales</CDropdownItem>
                <CDropdownItem @click="changeToPasado">Eventos Pasados</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    </div>
    <div v-if="tipo === 'actual'" class="eventos mx-5 col d-flex">
        <li v-for="evento in eventosList" :key="evento.id" class="event-tarjeta">
            <Evento :evento="evento" />
        </li>
        <div class="paginado-container">
            <Paginado v-if="eventosList.length > 0" @on-click="cambiarPagina" />
        </div>
    </div>
    <div v-if="tipo === 'pasado'" class="eventos mx-5 col d-flex">
        <li v-for="evento in oldEventosList" :key="evento.id" class="event-tarjeta">
            <Evento :evento="evento" />
        </li>
        <div class="paginado-container">
            <Paginado v-if="oldEventosList.length > 0" @on-click="cambiarPaginaOld" />
        </div>
    </div>
    <!-- <button @click="cargarEventosViejosEnElState">Cargar Eventos Pasados</button> -->
</template>

<script>
import Paginado from '../components/Paginado';
import Evento from '../components/Evento.vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import { CDropdown, CDropdownToggle } from '@coreui/vue';

export default {
    components: {
        Evento,
        Paginado,
        CDropdownToggle,
        CDropdown
    },
    data() {
        return {
            tipo: 'actual',
        }
    },
    computed: {
        ...mapState('eventos', ['eventosList', 'pages', 'oldEventosList']),
        isLoading() {
            if (this.eventosList.length === 0) return true
            else return false
        }
    },
    methods: {
        ...mapActions('eventos', ['cargarEventos', 'cargarEventosViejos']),
        ...mapMutations('eventos', ['setActualPage']),
        cambiarPagina(num) {
            if (num === 'd') {
                this.setActualPage(this.pages.actual - 1)
                this.cargarEventos()
            }
            else if (num === 'u') {
                this.setActualPage(this.pages.actual + 1)
                this.cargarEventos()
            }
            else {
                this.setActualPage(num)
                this.cargarEventos()
            }
        },
        cambiarPaginaOld(num) {
            if (num === 'd') {
                this.setActualPage(this.pages.actual - 1)
                this.cargarEventosViejos()
            }
            else if (num === 'u') {
                this.setActualPage(this.pages.actual + 1)
                this.cargarEventosViejos()
            }
            else {
                this.setActualPage(num)
                this.cargarEventosViejos()
            }
        },
        cargarEventosViejosEnElState() {
            this.tipo = 'pasado'
            this.cargarEventosViejos()
        },
        changeToActual() {
            this.tipo = 'actual'
            this.setActualPage(1)
            this.cargarEventos()
        },
        changeToPasado() {
            this.setActualPage(1)
            this.tipo = 'pasado'
            this.cargarEventosViejos()
        }
    }

}
</script>

<style scoped>
.eventos {
    margin-top: 110px;
    flex-direction: column;
    /* flex-wrap: nowrap; */
    align-items: flex-start;
    margin-bottom: 40px;
}

li {
    list-style-type: none;
    align-items: center;
    margin: 25px auto;
}

a {
    color: #2c3e50;
}

.paginado-container {
    align-self: center;
}
</style>