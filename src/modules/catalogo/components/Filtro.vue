<template>
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
        <h2 class="filtro-titulo">Precio : {{this.sliderValue}}</h2>
        <input v-model="sliderValue" type="range" min="0" max="100" class="slider"/>
    </div>
  
</template>

<script>

import { ref } from "vue";

export default {
    data() {
        return {
            sliderValue : ref(50),
            tipo_ron : '',
            marca : '',
        }
    },
}
</script>

<style>

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


</style>