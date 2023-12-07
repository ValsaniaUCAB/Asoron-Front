<template>
    <div class="cuadro d-flex flex-column justify-content-center align-items-center">
        <img src="../assets/Logo.svg" class="my-4" />
        <div class="box">
            <p class="titulo">Crear cuenta</p>
            <div class="boxBotones">
                <button class="boton select" @click="changeStatus(0)">Natural</button>
                <button class="boton select" @click="changeStatus(1)">Juridico</button>
            </div>
            <div class="box2">
                <template v-if="selection === 'natural'">
                    <Natural />
                </template>
                <template v-if="selection === 'juridico'">
                    <Juridico />
                </template>
            </div>
            <button class="boton">Inicar Sesion</button>

        </div>
    </div>
</template>

<script>

import Natural from '../components/Natural'
import Juridico from '../components/Juridico'

export default {
    components: {
        Natural,
        Juridico
    },
    data() {
        return {
            selection: 'natural',
            selected: 'selectedNatural'
        }
    },
    methods: {
        changeStatus(id) {
            if (id === 1) {
                this.selection = 'juridico'
            }
            if (id === 0) {
                this.selection = 'natural'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.boton {
    border: 2px solid;
    background-color: #31212B;
    color: white;
    height: 56px;
    width: 100%;
    border-radius: 32px;
    margin-top: 6px;
    margin-bottom: 6px;

    &.select {
        width: 200px;
    }

    &:hover {
        background-color: #46303d;
    }
}

.cuadro {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    padding: 50px 120px;
    border-radius: 50px;

}

.box {
    width: 470px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    justify-content: center;
}

.box2 {
    align-items: center;
    height: 300px;
    width: 470px;
    justify-content: center;
}

img {
    width: 260px;
    height: 60px;
}

.titulo {
    font-weight: bold;
    text-align: left;
    font-size: 48px;
    color: #31212B;
}

.form {
    margin-top: 12px;
    margin-bottom: 12px;
    height: 56px;
    border: 2px solid;
    border-color: lightgray;
    border-radius: 16px;
}

.boton {
    border: 2px solid;
    background-color: #31212B;
    color: white;
    height: 56px;
    border-radius: 32px;
    margin-top: 6px;
    margin-bottom: 6px;

    &.select {
        width: 200px;
    }

    &:hover {
        background-color: #46303d;
    }
}

.left {
    text-align: left;
}

input {
    text-indent: 20px;
}

.boxBotones {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.selectedNatural {
    border: 2px solid #FDD08D;
}

.selectedJuridico {
    border: 2px solid #FDD08D;
}
</style>