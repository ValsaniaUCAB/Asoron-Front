<template>
    <div>Enter Cliente Juridico</div>
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
            <p>RIF Juridico</p>
            <input type="text" placeholder="2222666" class="form" v-model="rif" />
        </div>
        <div class="form-box">
            <p>Denominacion Comercial</p>
            <input type="text" placeholder="Happy People 2010 C.A." class="form" v-model="denominacionComercial" />
        </div>
        <div class="form-box">
            <p>Razon Social</p>
            <input type="text" placeholder="Deco muebles" class="form" v-model="razonSocial" />
        </div>
        <div class="form-box">
            <p>Pagina Web</p>
            <input type="text" placeholder="tupagina.com" class="form" v-model="paginaWeb" />
        </div>
        <div class="form-box">
            <p>Capital Disponible (en dolares)</p>
            <input type="text" placeholder="8556" class="form" v-model="capitalDisponible" />
        </div>
        <div class="form-box">
            <p>Direccion Fiscal</p>
            <input type="text" placeholder="Calle locura, Apt 3" class="form" v-model="direccionFiscal" />
            <Lugar @on-click="setParroquiaFiscal"></Lugar>
        </div>
        <div class="form-box">
            <p>Direccion Fisica</p>
            <input type="text" placeholder="Calle locura, Apt 3" class="form" v-model="direccionFisica" />
            <Lugar @on-click="setParroquiaFisica"></Lugar>
        </div>
        <div class="form-box">
            <p>Tipo de Comercio</p>
            <TipoComercio @on-click="setTipoComercio"></TipoComercio>
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
import Lugar from './Lugar'
import CodigoTelefono from './CodigoTelefono';
import TipoComercio from './TipoComercio';

export default {
    components: {
        Lugar,
        CodigoTelefono,
        TipoComercio
    },
    data() {
        return {



            // Datos de la cuenta
            username: '',
            password: '',
            email: '',
            rif: '',
            denominacionComercial: '',
            razonSocial: '',
            paginaWeb: '',
            capitalDisponible: '',
            direccionFisica: '',
            direccionFiscal: '',
            tipoComercio: '',
            parroquiaFisica: '',
            parroquiaFiscal: '',
            codigoTelefono: '',
            telefono: ''
        }
    },
    methods: {
        setCodigoTelefono(item) {
            this.codigoTelefono = item.id
        },
        setTipoComercio(item) {
            this.tipoComercio = item.id
        },
        setParroquiaFisica(item) {
            this.parroquiaFisica = item
        },
        setParroquiaFiscal(item) {
            this.parroquiaFiscal = item
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

.form-telefono {
    display: flex;
    justify-content: space-between;

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