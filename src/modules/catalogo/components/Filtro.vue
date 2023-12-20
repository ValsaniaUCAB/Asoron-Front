<template>
    <div class="filtros">
        <div class="title-container">
            <h1>Filtros</h1>
            <div class="buttons-container">
                <button class="title-btn apply-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FDD08D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </button>
                <button class="title-btn cancel-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#31212b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
        <div class="filtro-container filtro-marca">
            <h2 class="filtro-titulo">Marca : {{ this.marca }}</h2>
            <ul class="filtro-lista">
                <li v-for="proveedor in marca_list" :key="proveedor.id" class="filtro_item">
                    <input v-model="marca" class="boton-radio" name="marca" type="radio" :value=proveedor>
                    <label>{{proveedor}}</label>
                </li>
            </ul>
        </div>
        <div class="filtro-container filtro-tipo-ron">
            <h2 class="filtro-titulo">Tipo de Ron : {{ this.tipo_ron }}</h2>
            <ul class="filtro-lista">
                <li v-for="tipoRon in tipo_ron_list" class="filtro_item" :key="tipoRon.id">
                    <input v-model="tipo_ron" name="tipo_ron" type="radio" :value=tipoRon>
                    <label>{{ tipoRon }}</label>
                </li>
            </ul>
        </div>
        <div class="filtro-container filtro-clasificacion">
            <h2 class="filtro-titulo">Clasificacion : {{ this.clasificacion }}</h2>
            <ul class="filtro-lista">
                <li class="filtro_item">
                    <input v-model="clasificacion" name="clasificacion" type="radio" value="Industrial">
                    <label>Industrial</label>
                </li>
                <li class="filtro_item">
                    <input v-model="clasificacion" name="clasificacion" type="radio" value="Agricola">
                    <label>Agricola</label>
                </li>
            </ul>
        </div>
        <div class="filtro-container filtro-precio">
            <h2 class="filtro-titulo">Precio : {{ this.valorPrecio }}</h2>
            <div class="slider-container">
                <input v-model="valorPrecio" type="range" min="0" max="1300" class="slider" step="10" />
            </div>
        </div>
        <div class="filtro-container filtro-anejamiento">
            <h2 class="filtro-titulo">Añejamiento : {{ this.valorAnejamiento }}</h2>
            <div class="slider-container">
                <input v-model="valorAnejamiento" type="range" min="1" max="35" class="slider" step="1" />
            </div>
        </div>
        <div class="filtro-container filtro-grado">
            <h2 class="filtro-titulo">Grado Alholico : {{ this.valorGrado }}</h2>
            <div class="slider-container">
                <input v-model="valorGrado" type="range" min="30" max="50" class="slider" step="10" />
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from "vue";
import { getRonTipoList , getRonMarcaList } from '../helpers/getRonFiltros';

export default {
    data() {
        return {
            valorPrecio: ref(0),
            valorAnejamiento: ref(1),
            valorGrado: ref(30),
            tipo_ron: '',
            marca: '',
            clasificacion: '',
            tipo_ron_list: [],
            marca_list: [],
        }
    },
    async mounted() {
        this.tipo_ron_list = await getRonTipoList();
        this.marca_list = await getRonMarcaList();
    },
}
</script>

<style>

.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 30px;
}

.title-btn {
    padding: 0;
    background: none;
    border: none;
}

.filtros {
    padding-left: 44px;
    padding-top: 52px;
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #000;
}

.title-container h1 {
    font-size: 36px;
    font-weight: 600;
}

.filtro-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 5vh;
}


.filtro-titulo {
    padding-bottom: 10px;
    width: 13vw;
    text-align: left;
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: 600;
    border-bottom: 3px solid #31212B;
    border-right: 3px solid #31212B;
}

.filtro-lista {
    margin: 0;
    padding: 0;
    padding-left: 5px;
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

.slider-container {
    display: flex;
    align-self: center;
    padding-top: 10px;
}



input[type="radio"] {
    accent-color: #232323;
}

input[type="range"] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 13vw;
    cursor: pointer;
    outline: none;
    /*  slider progress trick  */
    overflow: hidden;
    border-radius: 16px;
}

/* Track: webkit browsers */
input[type="range"]::-webkit-slider-runnable-track {
    height: 15px;
    background: whitesmoke;
    border-radius: 16px;
}

/* Track: Mozilla Firefox */
input[type="range"]::-moz-range-track {
    height: 15px;
    background: whitesmoke;
    border-radius: 16px;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #31212B;
    /*  slider progress trick  */
    box-shadow: -407px 0 0 400px #31212B;
}


/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #31212B;
    /*  slider progress trick  */
    box-shadow: -407px 0 0 400px #31212B;
}
</style>