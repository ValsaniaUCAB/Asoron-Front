<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
    <router-link :to="{ name: 'evento-detail', params: { id: evento.id } }" class="cuadro d-flex tarjeta">
        
            <img src="../assets/placeholder evento 1.webp">

            <div class="d-flex flex-column mx-3 my-2 tarjeta-right">
                <h2>{{ evento.nombre.toUpperCase() }}</h2>
                <h4>Del {{ evento.fechaIni }} al {{ evento.fechaFin }}</h4>
                <p>{{ evento.descripcion }}</p>
                <span>Direccion: {{ evento.direccion }}</span>
                <button id="tarjeta-button" class="button-18">RESERVAR</button>

            </div>
        
    </router-link>
</template>

<script>
export default {
    props: {
        evento: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped >
.cuadro {
    text-align: left;
    line-height: 100%;
    width: 1080px;
    height: 480px;
}

img {
    width: 50%;
}

.tarjeta {
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    margin: 10px;
    text-decoration: none;
    color: black;
    transition: transform 0.5s;
}
.tarjeta:hover {
    transform: scale(1.05);
}

.tarjeta-right h2 {
    color: #31212b;
    font-family: Inter;
    font-weight: 800;
    text-align: center;
    margin: auto;
    margin-bottom: 10px ;
}
.tarjeta-right h4 {
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    margin: 0 auto;
    width: 70%
}

.tarjeta-right p {
    font-family: Inter;
    font-weight: 400;
    text-align: center;
    margin: auto auto 10px auto;
    width: 70%;
}
.tarjeta-right span {
    font-family: Inter;
    font-weight: 400;
    text-align: center;
    margin: 10px auto;
    width: 70%;
}

#tarjeta-button {
    width: 120px;
    margin: auto;
    margin-bottom: auto;
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

    &:hover,
    &:focus {
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