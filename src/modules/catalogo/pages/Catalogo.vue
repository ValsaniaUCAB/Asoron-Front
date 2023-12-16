<template>
    <div>
        <div class="header">
            <div class="titulo">Productos</div>
            <div class="barras">
                <div class="busqueda">
                    <div class="titulo-barras">Buscar</div>
                    <input class="barra-busqueda" type="text" placeholder="Buscar ron por nombre..." v-model="term"
                        @keypress.enter="cargarRonesConBusqueda">
                </div>
                <div class="sort">
                    <div class="titulo-barras">Ordenar</div>
                    <input class="barra-busqueda" type="text" placeholder="Ordenar" v-model="term">
                </div>
            </div>
        </div>
        <div class="d-flex">
            <div class="col-2">
                Filtros
            </div>
            <div v-if="isLoading === true" class="catalogo cargando">
                <div class="box cargando">
                    Espere por favor
                    <h3 class="mt-2">
                        <i class="fa fa-spin fa-sync"></i>
                    </h3>
                </div>
            </div>
            <div v-else>
                <div class="catalogo">
                    <li v-for="ron in rones">
                        <Ron :ron="ron" />
                    </li>
                </div>
                <Paginado @on-click="cambiarPagina" />
            </div>
        </div>

    </div>
</template>

<script>

import Ron from "../components/Ron";
import Paginado from "../components/Paginado";
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
    components: {
        Ron,
        Paginado
    },
    data() {
        return {
            term: '',
        }
    },
    methods: {
        cambiarPagina(num) {
            if (num === 'd') {
                this.setActualPage(this.pages.actual - 1)
                this.cargarRones()
            }
            else if (num === 'u') {
                this.setActualPage(this.pages.actual + 1)
                this.cargarRones()
            }

            else {
                this.setActualPage(num)
                this.cargarRones()
            }
        },
        ...mapActions('catalogo', ['cargarRones']),
        ...mapMutations('catalogo', ['setBusqueda', 'setActualPage']),
        cargarRonesConBusqueda() {
            this.setBusqueda(this.term)
            this.cargarRones()
        }
    },
    computed: {
        ...mapState('catalogo', {
            rones: 'ronList',
            isLoading: 'isLoading',
            pages: 'pages'
        }),
    },
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: column;
    margin: 35px 0;
}

.catalogo {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 1200px;
    height: 1200px;

    &.cargando {
        justify-content: center;
        align-items: center;
    }
}

.titulo {
    font-family: 'Brothers', sans-serif;
    font-size: 48px;
    font-weight: bold;
    color: #31212B;
    width: 100%;
    text-align: left;
    margin-left: 30px;
}

.barras {

    margin: 30px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: right;

}

.busqueda {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    width: 470px;
}

.sort {
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    width: 225px;
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
}

.box {
    &.cargando {

        display: flex;
        flex-direction: column;
        height: 200px;
        width: 300px;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        border-radius: 16px;
    }
}

li {
    list-style-type: none;
}

input {
    text-indent: 20px;
}
</style>