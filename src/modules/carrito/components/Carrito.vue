<template>
    <div class="modal-background fade-in" @click.self="$emit('on:close')">
        <!-- El click.self permite que la emision sea solo en el componente padre y no en los hijos -->
        <div class="modal-container">
            <div class="container">
                <div class="box">
                    <div class="encabezado">
                        <p class="asoron">ASORON</p>
                        <p class="enc-tit">Bienvenido! Guest</p>
                    </div>
                    <div v-for="i in 2">
                        <li>
                            <item></item>
                        </li>
                    </div>
                    <div class="footer">
                        <div class="monto"><span>Monto total:</span><span>$286</span></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import item from './ItemCarrito'

export default {
    emits: ['on:close'],             // defino las emisiones que puede hacer el componente
    props: {
        property: {
            type: String,
            required: true,
        }
    },
    components:
    {
        item
    }
}
</script>

<style scoped>
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 900;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: flex-end;
}

.modal-container {
    width: 610px;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    z-index: 900;
}

.box {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 30px;
    justify-content: space-between;
}

.asoron {
    font-family: 'Brothers', sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: #fdd08d;
    text-align: left;
}

p {
    margin: 5px;
}

.enc-tit {
    font-family: 'Brothers', sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: #31212B;
    text-align: left;
}

.footer {
    display: flex;
    flex-direction: column;
}

.monto {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}


.fade-in {
    animation: fadeIn ease-out 0.2s;
    -webkit-animation: fadeIn ease-out 0.2s;
    -moz-animation: fadeIn ease-out 0.2s;
    -o-animation: fadeIn ease-out 0.2s;
    -ms-animation: fadeIn ease-out 0.2s;
}

li {
    width: 100%;
    list-style: none;
    margin: 10px;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-moz-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-o-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-ms-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
