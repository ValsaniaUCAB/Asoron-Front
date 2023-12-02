<template>
    <div class="d-flex justify-content-center">
        <div class="box">
            <img src="../assets/Logo.svg" class="my-4" />
            <div class="box2">
                <div class="d-flex flex-column">
                    <p class="titulo">Iniciar Sesion</p>
                    <input type="text" placeholder="Nombre de Usuario" class="form" />
                    <input type="password" placeholder="Contraseña" class="form" />
                    <button class="boton">Inicar Sesion</button>
                    <p class="left">Nuevo en Asoron? <router-link :to="{ name: 'register' }">Crear una cuenta</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    width: 600px;
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
</style>