<template>
    <h1 class="container" v-if="!ronDetallado">Cargando... Por favor Espere</h1>
    <div v-else>
        <div class="ron-container">
            <img :src="ronDetallado.images[0].url" />
            <div class="info">
                <h1>{{ ronDetallado.nombre }}</h1>
                <p>{{ ronDetallado.ron.descripcion }}</p>
                <div class="comprar">
                    <span> ${{ ronDetallado.inventario.precio }} </span>
                    <div class="cantidad-container">
                        <button @click="decrease" class="cantidad-button minus"><span>-</span></button>
                        <input v-model="cantidad" type="number">
                        <button @click="increase" class="cantidad-button plus"><span>+</span></button>
                    </div>
                    <button class="button-18 ">Añadir al Carrito</button>
                </div>
            </div>
        </div>
        <div class="desplegables-contenedor">
            <div class="desplegables-container">
                <div class="collapsible ficha-tecnica">
                    <input class="collapsible-input"  type="checkbox" id="collapsible-head-ficha">
                    <label class="collapsible-label external-label"  for="collapsible-head-ficha">FICHA TECNICA</label>
                    <div class="collapsible-text">
                        <ul class="collapsible-text-list external-list">
                            <li>
                                <b>Clasificación : </b>{{ ronDetallado.ron.clasificacion}}
                            </li>
                            <li>
                                <b>Tipo : </b>{{ ronDetallado.ron.tipo}}
                            </li>
                            <li>
                                <b>Materia Prima : </b>
                                <span v-for="materia in ronDetallado.ron.matePrima" :key="materia.id">
                                    {{ materia }}, 
                                </span>
                            </li>
                            <li>
                                <b>Origen : </b>{{ronDetallado.ron.lugar.estado}}, {{ronDetallado.ron.lugar.municipio}}, Pqa.{{ronDetallado.ron.lugar.parroquia}}
                            </li>
                            <!-- Colapsable interno de Añejamiento -->
                            <div class="collapsible mini-collapsible">
                                <input class="collapsible-input" type="checkbox" id="collapsible-head-anejamiento">
                                <label class="collapsible-label internal-label" for="collapsible-head-anejamiento">Añejamiento</label>
                                <div class="collapsible-text">
                                    <ul class="collapsible-text-list internal-list">
                                        <li>
                                            <b>Cantidad de Años : </b>{{ ronDetallado.ron.anejamiento.cantidadAnos}} años
                                        </li>
                                        <li>
                                            <b>Calidad del Agua : </b>{{ ronDetallado.ron.anejamiento.calidadAgua}}
                                        </li>
                                        <li>
                                            <b>Metodo de Destilación : </b>{{ ronDetallado.ron.anejamiento.metodoDestilacion}}
                                        </li>
                                        <li>
                                            <b>Metodo de Fermentación : </b>{{ ronDetallado.ron.anejamiento.metodoFermentacion}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <li>
                                <b>Grado Alcoholico : </b>{{ ronDetallado.ron.grad_alcohol}}°
                            </li>
                            <div class="collapsible mini-collapsible">
                                <input class="collapsible-input" type="checkbox" id="collapsible-head-botella">
                                <label class="collapsible-label internal-label" for="collapsible-head-botella">Botella</label>
                                <div class="collapsible-text">
                                    <ul class="collapsible-text-list internal-list">
                                        <li>
                                            <b>Material : </b>{{ ronDetallado.material.nombre}}
                                        </li>
                                        <li>
                                            <b>Capacidad : </b>{{ ronDetallado.material.capacidad}} mlts.
                                        </li>
                                        <li>
                                            <b>Altura : </b>{{ ronDetallado.material.altura}} cm.
                                        </li>
                                        <li>
                                            <b>Ancho : </b>{{ ronDetallado.material.ancho}} cm.
                                        </li>
                                        <li>
                                            <b>Tapa : </b>{{ ronDetallado.tapa.tipo}} de {{ ronDetallado.tapa.material}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <li>
                                <b>Color : </b>{{ronDetallado.ron.color.nombre}}, {{ronDetallado.ron.color.descripcion}}
                            </li>
                            <li>
                                <b>Sensaciones : </b>
                                <span v-for="sensacion in ronDetallado.ron.sensacion" :key="sensacion.id">
                                    {{ sensacion }}, 
                                </span>
                            </li>
                            <!-- Colapsable de Barril-->
                            <div class="collapsible mini-collapsible">
                                <input class="collapsible-input" type="checkbox" id="collapsible-head-barriles">
                                <label class="collapsible-label internal-label" for="collapsible-head-barriles">Barril</label>
                                <div class="collapsible-text internal-list">
                                    <ul class="collapsible-text-list internal-list">
                                        <div v-for="barril in ronDetallado.ron.anejamiento.barril" :key="barril.id" class="collapsible mini-collapsible">
                                            <input class="collapsible-input" type="radio" name="barriles" :id=ronDetallado.ron.anejamiento.barril.indexOf(barril)>
                                            <label class="collapsible-label internal-label add-label-padding" :for=ronDetallado.ron.anejamiento.barril.indexOf(barril)>
                                                Barril {{ronDetallado.ron.anejamiento.barril.indexOf(barril)}}
                                            </label>
                                            <div class="collapsible-text internal-list">
                                                <ul class="collapsible-text-list internal-list add-list-padding">
                                                    <li>
                                                        <b>Cantidad de Años : </b>{{ barril.anos}} años
                                                    </li>
                                                    <li>
                                                        <b>Calidad del Barril : </b>{{ barril.calidad}}
                                                    </li>
                                                    <li>
                                                        <b>Madera : </b>{{ barril.madera}}
                                                    </li>
                                                    <li>
                                                        <b>Capacidad : </b>{{ barril.tamano}} Lts.
                                                    </li>
                                                    <li>
                                                        <b>Tipo : </b>{{ barril.tipo}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div class="collapsible mini-collapsible">
                                <input class="collapsible-input" type="checkbox" id="collapsible-head-caja">
                                <label class="collapsible-label internal-label" for="collapsible-head-caja">Caja</label>
                                <div class="collapsible-text">
                                    <ul class="collapsible-text-list internal-list">
                                        <li>
                                            <b>Paleta : </b>{{ ronDetallado.caja.paleta}}, {{ ronDetallado.caja.cantidad_paleta}} UND.
                                        </li>
                                        <li>
                                            <b>Bulto: </b>{{ ronDetallado.caja.bulto}}, {{ ronDetallado.caja.cantidad_bulto}} UND.
                                        </li>
                                        <li>
                                            <b>Caja : </b>{{ ronDetallado.caja.caja}}, {{ ronDetallado.caja.cantidad_caja}} UND.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="collapsible como-servir">
                    <input class="collapsible-input" type="checkbox" id="collapsible-head-servir">
                    <label class="collapsible-label external-label" for="collapsible-head-servir">COMO SERVIR</label>
                    <div class="collapsible-text">
                        <ul class="collapsible-text-list external-list" >
                            <li class="collapsible-text-list-como-servir" v-for="servir in ronDetallado.ron.comoServir" :key="servir.coctel">
                                <h4>{{ servir.coctel.toUpperCase() }}</h4>
                                <p>{{ servir.como_preparar }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
        
        <!-- testing de desplegable mini -->
        <!--
        <div class="collapsible sensaciones">
            <input class="collapsible-input" type="checkbox" id="collapsible-head-sensacion">
            <label class="collapsible-label external-label" for="collapsible-head-sensacion">SENSACIONES</label>
            <div class="collapsible-text">
                <ul class="collapsible-text-list external-list">
                    <li>
                        <b>Añejamiento : </b>{{ ronDetallado.ron.anejamiento.cantidadAnos}} años
                    </li>
                        <div class="collapsible mini-collapsible">
                            <input class="collapsible-input" type="checkbox" id="collapsible-head-mini">
                            <label class="collapsible-label internal-label" for="collapsible-head-mini">Colapsable</label>
                            <div class="collapsible-text internal-text">
                                <ul class="collapsible-text-list internal-list">
                                    <li>
                                        <b>Añejamiento : </b>{{ ronDetallado.ron.anejamiento.cantidadAnos}} años
                                    </li>
                                    <li>
                                        <b>Sensaciones : </b>
                                        <span v-for="sensacion in ronDetallado.ron.sensacion" :key="sensacion.id">
                                            {{ sensacion }}, 
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </ul>
            </div>
        </div> -->
        <footer></footer>
    </div>
</template>

<script>

import getRonDetail from '@/modules/catalogo/helpers/getRonDetail'
export default {
    props: {
        id: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            ronDetallado: null,
            cantidad: 1,
        }
    },
    methods: {
        async getRonDetail(id) {
            this.ronDetallado = null
            try {
                this.ronDetallado = await getRonDetail(id)
                // console.log(this.ronDetallado)
            } catch (error) {
                // this.$router.push({ name: 'catalogo' })
            }
        },
        increase(){
            if(this.cantidad < this.ronDetallado.inventario.cantidad)
            this.cantidad++
        },
        decrease(){
            if(this.cantidad > 1){
                this.cantidad--}
        },
    },
    mounted() {
        this.getRonDetail(this.id)
    },
    watch: {
        id(value) {
            this.getRonDetail(value)
        },
        cantidad(val){
            if (val > this.ronDetallado.inventario.cantidad){
                this.cantidad = this.ronDetallado.inventario.cantidad
            } else if (val < 1){
                this.cantidad = 1
            }
        }
    }
}

</script>

<style lang="scss" scoped>
footer {
    height: 800px;
}

.ron-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
}

.desplegables-contenedor {
    display: flex;
    flex-direction: row;
    justify-content: center;
}


.ron-container img {
    width: 500px;
    height: 500px;
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

}

.info h1 {
    width: 564px;
    font-size: 36px;
    font-weight: 700;
    font-family: 'Brothers';
    margin-bottom: 20px;
    text-align: left;
}

.info p {
    width: 564px;
    text-align: left;
}

.comprar {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 75%;
}


// colapsables 

.desplegables-container {
    width: 1060px;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    
}

.collapsible-input {
    display: none;

}

.collapsible {
    max-width: 70vw;
    overflow: hidden;
    font-weight: 500;
    margin-bottom: 20px;
}

.mini-collapsible {
    margin-bottom: 0;
}

.collapsible .collapsible-label {
    position: relative;
    display: block;
    cursor: pointer;
    z-index: 1;
}

.external-label {
    border-radius: 4px;
    padding: 15px;
    color: black;
    font-size: 22px;
    font-weight: 800;
    font-family: 'Brothers', sans-serif;
    background: #FDD08D;
    text-align: left;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .1), 0 4px 11px 0 rgba(0, 0, 0, .08);
    margin-bottom: 10px;
}

.collapsible .external-label:after {
    content: "+";
    position: absolute;
    right: 15px;
    top: 15px;
    transition: all 0.3s ease;
}

.collapsible .collapsible-input:checked+.collapsible-label:after {
    transform: rotate(45deg);
    transition: all 0.3s ease;
}


.collapsible-text {
    max-height: 1px;
    overflow: hidden;
    border-radius: 4px;
    line-height: 1.4;
    position: relative;
    top: -100%;
    opacity: 0.5;
    transition: all 0.3s ease;
}

.collapsible .collapsible-input:checked~.collapsible-text {
    max-height: 1000px;
    background: whitesmoke;
    border-radius: 4px;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .1), 0 4px 11px 0 rgba(0, 0, 0, .08);
    opacity: 1;
    top: 0;
    
}

.collapsible-text .collapsible-text-list {
    padding: 0;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0;
}

.external-list li {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: black;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    width: 100%;
    margin: 0;
}

.internal-list li {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: black;
    padding: 10px 20px 10px 40px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    width: 100%;
    margin: 0;
}

.add-list-padding li {
    padding-left: 60px;
}

.collapsible-text .collapsible-text-list .collapsible-text-list-como-servir h4 {
    font-size: 18px;
    font-weight: 800;
    font-family: 'Brothers', sans-serif;
}

.collapsible-text .collapsible-text-list .collapsible-text-list-como-servir p {
    margin-left: 10px;
}

// colapsables internos

.internal-label {
    font-size: 16px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: black;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    text-align: left;
    transition: background-color 0.3s ease;
}

.add-label-padding {
    padding-left: 40px;
}

.internal-label:hover {
    background-color: rgb(230, 230, 230);
}

.collapsible .internal-label:after {
    content: "+";
    position: absolute;
    right: 20px;
    top: 10px;
    transition: all 0.3s ease;
}



// cantidad
.cantidad-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: #E3E5ED 1px solid ;
    width: 150px;
    height: 40px;
    border-radius:24px;
}

.cantidad-container input {
    border: 0px;
    width: 50px;
    border: #E3E5ED 1px solid ;
    height: 40px;
    text-align: center;
}

.cantidad-container input[type=number]::-webkit-inner-spin-button, 
.cantidad-container input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

.cantidad-button{
    border: 0px;
    width: 50px;
    padding: 0;
    padding-bottom: 3px;
    font-size: 24px;
    color:#7c7c7c ;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    background-color: transparent;
    transition: background-color 0.167s, color 0.167s;
}

.cantidad-button:hover {
    background-color: #E3E5ED;
    color: #000;
}

.plus {
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
}

.minus {
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
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

    &.catalogo {
        font-family: 'Inter', 'sans-serif';
        font-size: 16px;
        font-weight: 800;
    }

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
</style>