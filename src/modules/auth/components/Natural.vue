<template>
    <div>Enter Cliente Natural</div>

    <div class="d-flex flex-column">
        <div class="form-box">
            <p>Username</p>
            <input type="text" placeholder="Username" class="form" v-model="username" />
        </div>
        <div class="form-box">
            <p>Contraseña</p>
            <input type="text" placeholder="Contraseña" class="form" v-model="password" />
        </div>
        <div class="form-box">
            <p>Correo Electronico</p>
            <input type="text" placeholder="micorreo@gmail.com" class="form" v-model="email" />
        </div>
        <div class="form-box">
            <p>Cedula de Identidad</p>
            <input type="text" placeholder="2222226" class="form" v-model="cedula" />
        </div>
        <div class="form-box">
            <p>RIF Personal</p>
            <input type="text" placeholder="2222666-1" class="form" v-model="rif" />
        </div>
        <div class="form-box">
            <p>Nombre</p>
            <input type="text" placeholder="Nombre" class="form" v-model="nombre" />
        </div>
        <div class="form-box">
            <p>Segundo Nombre</p>
            <input type="text" placeholder="Nombre" class="form" v-model="segundoNombre" />
        </div>
        <div class="form-box">
            <p>Apellido</p>
            <input type="text" placeholder="Apellidos" class="form" v-model="apellido" />
        </div>
        <div class="form-box">
            <p>Segundo Apellido</p>
            <input type="text" placeholder="Apellidos" class="form" v-model="segundoApellido" />
        </div>
        <div class="form-box">
            <p>Direccion</p>
            <input type="text" placeholder="Calle locura, Apt 3" class="form" v-model="direccion" />
            <Lugar @on-click="setParroquia"></Lugar>
        </div>
        <div class="form-box">
            <p>Telefono</p>
            <div class="form-telefono">
                <CodigoTelefono @on-click="setCodigoTelefono"></CodigoTelefono>
                <input type="text" placeholder="1234567" class="form" v-model="telefono" />
            </div>
        </div>
        <button class="boton">Registrarse</button>
    </div>
</template>

<script>

import CodigoTelefono from './CodigoTelefono';
import Lugar from './Lugar.vue'

export default {
    components: {
        Lugar,
        CodigoTelefono
    },
    data() {
        return {
            username: '',
            password: '',
            email: '',
            cedula: '',
            rif: '',
            nombre: '',
            segundoNombre: '',
            apellido: '',
            segundoApellido: '',
            direccion: '',
            parroquia: '',
            codigoTelefono: '',
            telefono: ''
        }
    },
    methods: {
        setParroquia(item) {
            this.parroquia = item
        }
    }
}

</script>

<style lang="scss" scoped>
.form-telefono {
    display: flex;
    justify-content: space-between;

}

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

p {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: bold;
    color: #31212B;

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

.form-box {
    margin-top: 12px;
    margin-bottom: 12px;
    text-align: left;
}

.form {
    width: 100%;
    height: 56px;
    border: 2px solid;
    border-color: lightgray;
    border-radius: 16px;
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
</style>