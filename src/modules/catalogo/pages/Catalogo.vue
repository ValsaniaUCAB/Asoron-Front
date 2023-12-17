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
        <div class="contenedor">
            <div class="filtros">
                <h1>Filtros</h1>
                <form class="filtro-container filtro-marca">
                    <h2 class="filtro-titulo">Marca : {{this.marca}}</h2>
                    <ul class="filtro-lista">
                        <li class="filtro_item">
                            <input v-model="marca" type="radio" value="Cacique">
                            <label>Cacique</label>
                        </li>
                        <li class="filtro_item">
                            <input v-model="marca" type="radio" value="Carupano">
                            <label>Carupano</label>
                        </li>
                        <li class="filtro_item">
                            <input v-model="marca" type="radio" value="Pampero">
                            <label>Pampero</label>
                        </li>
                        <li class="filtro_item">
                            <input v-model="marca" type="radio" value="Santa Teresa">
                            <label>Santa Teresa</label>
                        </li>
                    </ul>
                </form>
                <form class="filtro-container filtro-tipo-ron">
                    <h2 class="filtro-titulo">Tipo de Ron : {{this.tipo_ron}}</h2>
                    <ul class="filtro-lista">
                        <li class="filtro_item">
                            <input v-model="tipo_ron" type="radio" value="Ambar">
                            <label>Ambar</label>
                        </li>
                        <li class="filtro_item">
                            <input v-model="tipo_ron" type="radio" value="Ambar Deluxe">
                            <label>Ambar Deluxe</label>
                        </li>
                        <li class="filtro_item">
                            <input v-model="tipo_ron" type="radio" value="Valsania Gay">
                            <label>Obscuro</label>
                        </li>
                        <li class="filtro_item">
                            <input v-model="tipo_ron" type="radio" value="Christian Pato">
                            <label>Christian Pato</label>
                        </li>
                    </ul>
                </form>
                <input v-model="sliderValue" type="range" min="0" max="100" class="slider" />
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
                    <li v-for="ron in rones" :key="ron.id">
                        <Ron :ron="ron" />
                    </li>
                </div>
                <Paginado @on-click="cambiarPagina" />
            </div>
            <div class="spacer"></div>
        </div>

    </div>
</template>

<script>

import Ron from "../components/Ron";
import Paginado from "../components/Paginado";
import { mapActions, mapMutations, mapState } from 'vuex';
import { ref } from "vue";

export default {
    components: {
        Ron,
        Paginado
    },
    data() {
        return {
            term: '',
            sliderValue : ref(50),
            tipo_ron : '',
            marca : '',
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

.filtros {
    padding-left: 44px;
    padding-top: 52px;
    width: 15vw;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #000;
}

.spacer {
    // width: 274px;
    width: 15vw;
}

.catalogo {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1200px;
    width: 70vw;
    margin-bottom: 10vh;

    &.cargando {
        justify-content: center;
        align-items: center;
    }
}

.contenedor {
    display: flex;
    justify-content: space-between;
}

.titulo {
    font-family: 'Brothers', sans-serif;
    font-size: 48px;
    font-weight: bold;
    color: #31212B;
    
    text-align: left;
    margin-left: 30px;
}

.barras {
    margin: 30px;
    display: flex;
    flex-direction: row;
    
    justify-content: space-around;
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

.filtros h1 {
    font-size: 36px;
    padding-bottom: 30px;
    font-weight: 600;
}

.filtro-container {
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 5vh ;
}


.filtro-titulo {
    padding-bottom: 25px;
    font-size: 24px;
    font-weight: 600;
}

.filtro-lista {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    list-style-type: none;
    width: 100%;
}

.filtro-lista li {
    display: flex;
    align-items: center;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
}

.filtro-lista li input {
    margin-right: 10px;
    width: 20px;
    height: 20px;
}

li {
    padding: 0;
    list-style-type: none;
}

input {
    text-indent: 20px;
}
</style>