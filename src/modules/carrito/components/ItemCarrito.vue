<template>
    <div class="box">
        <div>ID: {{ item.id }}</div>
        <div>Cantidad: {{ item.cantidad }}</div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 150px;
    border: 1px solid lightgray;
}
</style>
