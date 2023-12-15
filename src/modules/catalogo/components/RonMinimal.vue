<template>
    <div class="box">
        <router-link :to="{ name: 'ron-detail', params: { id: ron.id } }"><img :src="ron.images[0].img_url" /></router-link>
        <div class="nombre">
            {{ ron.nombre }}
            <div class="precio d-flex justify-content-between"><span>Desde</span><span>${{ ron.precio }}</span></div>
        </div>

    </div>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
    width: 370px;
    padding: 30px 40px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    transition: transform 0.5s;

    &:hover {
        box-shadow: 0 0 20px rgba(253, 208, 141, 0.9);
        transform: scale(1.05);
    }
}

.nombre {
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    text-align: left;
}

.precio {
    color: #75869C;
    font-size: 14px;
    font-weight: normal;
    width: 100%;
    text-align: left;
}

img {
    height: 300px;
    width: 300px;
}
</style>