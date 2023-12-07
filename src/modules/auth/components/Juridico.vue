<template>
    <div>Enter Cliente Juridico</div>
    <div class="d-flex flex-column">
        <div class="form-box">
            <p>Username</p>
            <input type="text" placeholder="Username" class="form" />
        </div>
        <div class="form-box">
            <p>RIF Juridico</p>
            <input type="text" placeholder="2222666" class="form" />
        </div>
        <div class="form-box">
            <p>Razon Social</p>
            <input type="text" placeholder="Nombre" class="form" />
        </div>
        <div class="form-box">
            <p>Apellidos</p>
            <input type="text" placeholder="Apellidos" class="form" />
        </div>
        <div class="form-box">
            <p>Direccion</p>
            <input type="text" placeholder="Calle locura, Apt 3" class="form" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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