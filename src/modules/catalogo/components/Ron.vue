<template>
    <div>
        <router-link :to="{ name: 'ron-detail', params: { id: ron.ron_id } }"><img
                :src="ron.images[1].img_url" /></router-link>
        <h3>{{ ron.ron_nombre }}</h3>

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

<style scoped>
img {
    height: 300px;
    width: 300px;
    border: 1px solid lightgrey;
    border-radius: 15px;
}
</style>
