<template>
    <div v-if="item.afiliado" class="caja">
        <div class="info">
            <img src="@/modules/shared/assets/Logo PNG.png" alt="Imagen que no carga">
            <div class="info-afiliado">
                <div class="nombre">{{ item.afiliado.nombre }}</div>
                <div class="cantidad">Cantidad: x{{ item.cantidad }}</div>
            </div>
        </div>
        <div class="monto">${{ item.afiliado.precio }}</div>
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

.info {
    display: flex;
    flex-direction: row;
}

.info-afiliado {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 10px;
}

.nombre {
    font-size: 20px;
    font-weight: bold;
}

img {
    width: 50px;
    height: 50px;
}
</style>
