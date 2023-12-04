<template>
    <router-link :to="{ name: 'ron-detail', params: { id: ron.ron_id } }">
        <div class="box">
            <img :src="ron.images[0].img_url" />
            <div>
                <div class="nombre">{{ ron.ron_nombre }}</div>
                <div class="precio">$289</div>
                <button class="button-18">Añadir al Carrito</button>
            </div>

        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        ron: {
            type: Object,
            Required: true,
        }
    },
    methods: {

    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.box {
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 470px;
    width: 290px;
    padding: 20px 30px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    transition: transform 0.5s;

    &:hover {
        box-shadow: 0 0 20px rgba(253, 208, 141, 0.9);
        transform: scale(1.05);
    }
}

.nombre {
    color: #31212B;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    text-align: center;
}

.precio {
    color: #75869C;
    font-size: 14px;
    font-weight: normal;
    width: 100%;
    text-align: center;
}

img {
    height: 230px;
    width: 230px;
}

.button-18 {
    margin: 10px;
    align-items: center;
    background-color: #fff;
    border: 1px solid #31212B;
    border-radius: 100px;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: normal;
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
    :focus {
        background-color: #31212B;
        color: #e6bd7f;
    }

    &:active {
        background: #48323f;
    }

    &:disabled {
        cursor: not-allowed;
        background: rgba(0, 0, 0, .08);
        color: rgba(0, 0, 0, .3);
    }
}
</style>