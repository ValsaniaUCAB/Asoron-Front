<template>
    <div class="caja">
        <div class="info">
            <img :src="info.imagen" alt="Imagen que no carga">
        </div>
        <div class="monto">precio</div>
    </div>
</template>

<script>



export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            info: {
                nombre: '',
                imagen: '',
                precio: 0,
                cantidad: this.item.cantidad,
            }
        }
    },
    methods: {
        obtenerInfo() {
            if (this.item.afiliado) {
                this.info.nombre = this.item.afiliado.nombre
                this.info.imagen = '@/modules/shared/assets/Logo PNG.png'
                this.info.precio = this.item.afiliado.precio
            }
        }
    },
    mounted() {
        this.obtenerInfo()
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
    height: 150px;
    border: 1px solid lightgray;
    padding: 10px;
}
</style>
