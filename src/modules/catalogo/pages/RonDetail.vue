<template>
    <h1>Detalle</h1>
    <h1 v-if="!ronDetallado">Cargando... Por favor Espere</h1>
    <div v-else>

        <div class="ron-container"> 
            <img :src="ronDetallado.images[0].img_url" /> 
            <div class="info">
                <h1>{{ ronDetallado.ron_nombre }}</h1>
                <p>{{ ronDetallado.ron_descripcion }}</p>
                <div class="comprar">
                    <span> $22 </span>
                    <div>- 1 +</div>
                    <button class="button-18 ">Añadir al Carrito</button>
                </div>
            </div>
        </div>

        <div class="extra-content">

            <div class="como-servir">
                <div>
                    <a href="#">
                        <h4>Como Servir:</h4>
                    </a>
                </div>
                <div class="desplegable">
                    <ul> 
                        <li v-for="servir in ronDetallado.comoservir" :key="servir.id">
                            Titulo: {{ servir.coctel }}
                            <p>Metodo: {{ servir.como_preparar }}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="sensaciones">
                <div>
                    <a href="">
                        <h4>Sensaciones:</h4>
                    </a>
                </div>
                <div class="desplegable">
                    <ul>
                        <li v-for="sensacion in ronDetallado.sensancion" :key="sensacion.id">
                            {{ sensacion.sensacion }}
                        </li>
                    </ul>
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
        }
    },
    data() {
        return {
            ronDetallado: null
        }
    },
    methods: {
        async getRonDetail(id) {
            this.ronDetallado = await getRonDetail(id)
            console.log(this.ronDetallado)
        }
    },
    mounted() {
        this.getRonDetail(this.id)

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
    font-size: 36px;
    font-weight: 700;
    font-family: 'Brothers';
    margin-bottom: 20px;
}

.info p {
    width: 564px;
    text-align: left;
}

.comprar {
    margin-top:30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 75%;
}

.extra-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 100px;
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
        font-size: 16px ;
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