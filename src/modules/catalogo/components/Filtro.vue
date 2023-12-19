<template>
    <div class="filtros">
        <div class="title-container">
            <h1>Filtros</h1>
            <button class="title-btn apply-btn">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
                    <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
                </svg>
            </button>
            <button class="title-btn cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 50 50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"><path d="M20 4 4 20M4 4l16 16"/></svg>
            </button>
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

.apply-btn svg {
    fill: #FDD08D;
}
.cancel-btn svg {
    fill: #31212b;
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

.filtros h1 {
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