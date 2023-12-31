<template>
    <div class="box">
        <div class="caja">
            <div class="info">info</div>
            <div class="monto">precio</div>
        </div>
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

.caja {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 10px;
}
</style>
