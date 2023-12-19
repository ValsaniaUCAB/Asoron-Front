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
                <div class="desplegables">
                    <div class="wrapper">
                        <div class="collapsible ficha-tecnica">
                            <input type="checkbox" id="collapsible-head-ficha">
                            <label for="collapsible-head-ficha">FICHA TECNICA</label>
                            <div class="collapsible-text">
                                <ul>
                                    <li v-for="sensacion in ronDetallado.ron.sensacion" :key="sensacion.id">
                                        {{ sensacion }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapsible como-servir">
                            <input type="checkbox" id="collapsible-head-servir">
                            <label for="collapsible-head-servir">COMO SERVIR</label>
                            <div class="collapsible-text">
                                <ul>
                                    <li v-for="servir in ronDetallado.ron.comoServir" :key="servir.coctel">
                                        <h4>{{ servir.coctel.toUpperCase() }}</h4>
                                        <p>{{ servir.como_preparar }}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapsible sensaciones">
                            <input type="checkbox" id="collapsible-head-sensacion">
                            <label for="collapsible-head-sensacion">SENSACIONES</label>
                            <div class="collapsible-text">
                                <ul>
                                    <li v-for="sensacion in ronDetallado.ron.sensacion" :key="sensacion.id">
                                        {{ sensacion }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            cantidad: 1
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
        }
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
.ron-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
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

.wrapper {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    justify-content: flex-start;
    align-items: flex-start;
    height: 800px;


}

.collapsible input {
    display: none;

}

.collapsible {
    width: 560px;
    overflow: hidden;
    font-weight: 500;
    margin-bottom: 20px;
}

.collapsible label {
    position: relative;
    font-size: 22px;
    font-weight: 800;
    font-family: 'Brothers', sans-serif;
    background: #FDD08D;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .1), 0 4px 11px 0 rgba(0, 0, 0, .08);
    color: black;
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
    text-align: left;
    z-index: 1;
}

.collapsible label:after {
    content: "+";
    position: absolute;
    right: 15px;
    top: 15px;
    transition: all 0.3s ease;
}

.collapsible input:checked+label:after {
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

.collapsible input:checked~.collapsible-text {
    max-height: 400px;
    background: whitesmoke;
    border-radius: 4px;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .1), 0 4px 11px 0 rgba(0, 0, 0, .08);
    opacity: 1;
    top: 0;
}

.collapsible-text ul {
    padding: 0;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: left;

}

.collapsible-text ul li {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: black;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    width: 100%;
}

.collapsible-text ul li h4 {
    font-size: 18px;
    font-weight: 800;
    font-family: 'Brothers', sans-serif;
}

.collapsible-text ul li p {
    margin-left: 10px;
}

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