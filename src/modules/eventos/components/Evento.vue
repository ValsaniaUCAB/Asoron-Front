<template>
    <router-link :to="{ name: 'evento-detail', params: { id: evento.id } }" class="cuadro d-flex">
        <img src="../assets/placeholder evento 1.webp">

        <div class="d-flex flex-column mx-3 my-2">
            <h2>{{ evento.nombre }}</h2>
            <h4>Del {{ evento.fechaIni }} al {{ evento.fechaFin }}</h4>
            <p>Direccion: {{ evento.direccion }}</p>
            <p>{{ evento.descripcion }}</p>

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

<style scoped>
.cuadro {
    text-align: left;
    line-height: 100%;
}

img {
    height: 240px;
    border-radius: 28px;
}
</style>