<template>
    <Navbar />
    <div class="container ">
        <div class="head-content">
            <h1>¿Quienes Somos?</h1>
            <img class="logo" src="@/modules/shared/assets/navbar/ASORON.svg">
            <p>ASORON es una asociación sin ánimo de lucro que nace en 2019 con el objetivo de promover la inclusión social de las personas con discapacidad intelectual o del desarrollo y sus familias en la isla de La Palma.</p>
        </div>
        <div class="mision-container">
            <img class="img-filler" src="@/modules/eventos/assets/placeholder evento 1.webp">
            <div class="info">
                <h1>Misión</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ratione adipisci facilis, recusandae similique accusantium totam necessitatibus libero eligendi, quod inventore nulla minus dolores eveniet suscipit sit, iste ut?</p>
            </div>
        </div>
        <div class="whyron-container">
            <div class="info">
                <h1>¿POR QUE RON?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ratione adipisci facilis, recusandae similique accusantium totam necessitatibus libero eligendi, quod inventore nulla minus dolores eveniet suscipit sit, iste ut?</p>
            </div>
            <img class="img-filler" src="@/modules/eventos/assets/placeholder evento 1.webp">
        </div>
    </div>
    

</template>


<script>

import Navbar from '@/modules/shared/components/Navbar.vue'

export default {
    components: {
        Navbar
    }
}
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    .head-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
    }

    .mision-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 50px;
        margin-right: 50px;
    }

    .whyron-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
    }

    .img-filler {
        width: 460px;
        height: 360px;
    }

</style>