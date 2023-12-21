<template>
    <div class="box">
        <img class="pointer" :src="prod.botella.images[0].img_url" />
        <div class="nombre">
            {{ prod.botella.nombre }}
            <div class="precio ">Descuento: {{ prod.oferta.descuento }}%</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        prod: {
            type: Object,
            Required: true,
        },
    },
    methods: {
        sendToDetail() {
            this.$router.push({
                name: 'ron-detail',
                params: {
                    id: this.prod.botella.id
                }
            })
        }
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
    text-align: center;
}

.precio {
    color: #FFA217;
    font-size: 24px;
    font-family: 'Brothers', sans-serif;
    font-weight: normal;
    width: 100%;
    text-align: center;
}

img {
    height: 300px;
    width: 300px;
}
</style>