<template>
    <div>Soy Catalogo</div>
    <div>
        <div class="header">
            <div class="titulo">Productos</div>
            <div class="barras">
                <div class="busqueda">
                    <div class="titulo-barras">Buscar</div>
                    <input class="barra-busqueda" type="text" placeholder="Buscar ron por nombre..." v-model="term">
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
            <div>
                <div class="catalogo">
                    <li v-for="ron in ronesByTerm">
                        <Ron :ron="ron" />
                    </li>
                </div>
                <Paginado :ronList="rones" :page="page" @on-click="cambiarPagina" />
            </div>
        </div>

    </div>
</template>

<script>

import Ron from "../components/Ron";
import Paginado from "../components/Paginado";
import { mapGetters, mapState } from 'vuex';
export default {
    components: {
        Ron,
        Paginado
    },
    data() {
        return {
            term: '',
            page: 1,
        }
    },
    methods: {
        cambiarPagina(num) {
            if (num === 'd') this.page--
            else if (num === 'u') this.page++
            else this.page = num
        }
    },
    computed: {
        ...mapState('catalogo', {
            rones: 'ronList'
        }),
        ...mapGetters('catalogo', ['getRonesByTerm']),
        ronesByTerm() {
            return this.getRonesByTerm(this.term, (this.page * 6) - 6)
            //! Hay que cambiar los valores aqui 6, en la funcion getRonesByTerm en getters, y en paginado, en el template tambien a 6
        }
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
    height: 1200px
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

li {
    list-style-type: none;
}

input {
    text-indent: 20px;
}
</style>