<template>
    <div v-if="item.afiliado" class="caja">
        <div class="info">
            <img src="@/modules/shared/assets/Logo PNG.png" alt="Imagen que no carga">
            <div class="info-afiliado">
                <div class="nombre">{{ item.afiliado.nombre }}</div>
            </div>
        </div>
        <div class="monto-afiliado">
            <div>
                <div class="precio"> ${{ item.afiliado.precio }}</div>
                <div class="cantidad">x{{ item.cantidad }}</div>
            </div>
            <hr>
            <div class="total">Total: ${{ calcularEventAfil(item.afiliado.precio) }}</div>
        </div>
        <button class="title-btn cancel-btn" @click="delete_item">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                stroke="#31212b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <div v-if="item.botella" class="caja">
        <div class="info">
            <img :src="item.botella.images[0].img_url" alt="Imagen que no carga">
            <div class="info-afiliado">
                <div class="nombre">{{ item.botella.nombre }}</div>
                <Oferta :oferta="item.oferta" :selected="oferta.selected" :ofertaList="ofertaList" :index="index"
                    @on-cambiarOferta="cambiarOferta" @on-quitarOferta="quitarOferta" />
                <PlusMinusInput @update:modelValue="changeCantidad" :inicial="this.item.cantidad"
                    :Max="item.botella.cantidadMaxima" />
            </div>
        </div>
        <div class="monto-afiliado">
            <div v-if="oferta.selected === true">
                <span class="precio-sin-desc">${{ item.botella.precio }}</span>
                <span class="precio-con-desc"> ${{ (item.botella.precio - (item.botella.precio *
                    item.oferta.descuento / 100)).toFixed(2) }}</span>
                <div class="cantidad">x{{ item.cantidad }}</div>
            </div>
            <div v-else>
                <div class="precio"> ${{ item.botella.precio }}</div>
                <div class="cantidad">x{{ item.cantidad }}</div>
            </div>
            <hr>
            <div v-if="oferta.selected === true" class="total">Total: ${{ calcularTotal(this.item.oferta.descuento) }}</div>
            <div v-else class="total">Total: ${{ calcularTotal() }}</div>
        </div>
        <button class="title-btn cancel-btn" @click="delete_item">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                stroke="#31212b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>

    <div v-if="item.evento" class="caja">
        <div class="info">
            <img src="@/modules/shared/assets/Evento PNG.png" alt="Imagen que no carga">
            <div class="info-afiliado">
                <div class="nombre">{{ item.evento.nombre }}</div>
                <div class="entrada"> {{ item.evento.entradaNombre }}</div>
                <PlusMinusInput @update:modelValue="changeCantidad" :inicial="this.item.cantidad"
                    :Max="item.evento.cantidadMaxima" />

            </div>
        </div>
        <div class="monto-afiliado">
            <div>
                <div class="precio"> ${{ item.evento.precio }}</div>
                <div class="cantidad">x{{ item.cantidad }}</div>
            </div>
            <hr>
            <div class="total">Total: ${{ calcularEventAfil(item.evento.precio, item.cantidad) }}</div>
        </div>
        <button class="title-btn cancel-btn" @click="delete_item">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                stroke="#31212b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
</template>

<script>
import { CDropdown } from '@coreui/vue'
import getOfertasList from '../helpers/getOfertasList'
import Oferta from './Oferta'
import PlusMinusInput from '@/modules/shared/components/PlusMinusInput'
import { mapMutations } from 'vuex'

export default {
    emits: ['on-calcularTotal'],
    props: {
        item: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    components: {
        CDropdown,
        Oferta,
        PlusMinusInput
    },
    data() {
        return {
            oferta: {
                selected: false
            },
            ofertaList: [],
            total: 0,
        };
    },
    methods: {
        ...mapMutations('carrito', ['changeCantidadItemCarrito']),
        cambiarOferta(item) {
            this.oferta.selected = true;
        },
        quitarOferta() {
            this.oferta.selected = false;
        },
        async getOfertas() {
            if (this.item.botella) {
                try {
                    this.ofertaList = await getOfertasList(this.item.botella.id)
                } catch (error) {
                    console.log(error)
                }
            }
        },
        changeCantidad(value) {
            this.item.cantidad = value
            this.changeCantidadItemCarrito({ index: this.index, cantidad: value })
        },

        calcularTotal(oferta = 0) {
            this.total = ((this.item.botella.precio - (this.item.botella.precio *
                oferta / 100)).toFixed(2) * this.item.cantidad).toFixed(2)
            return this.total
        },

        calcularEventAfil(precio, cantidad = 1) {
            this.total = (precio * cantidad).toFixed(2)
            return this.total
        }
    },
    mounted() {
        this.getOfertas();
        if (this.item.oferta) {
            this.oferta.selected = true;
        }
    },
    watch: {
        total: {
            handler(value, oldValue) {
                this.$emit('on-calcularTotal', [parseFloat(value), parseFloat(oldValue)])
            },
            immediate: true
        }
    },
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
    height: 250px;
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
    align-items: center;
    margin-left: 10px;
    width: 250px;
}

.nombre {
    font-size: 20px;
    font-weight: bold;
}

.monto-afiliado {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90px;
    height: 100%;
    font-size: 16px;
}

.precio-sin-desc {
    text-decoration: line-through;
    color: red;
}

.oferta-box {
    width: 100px;
}

img {
    width: 50px;
    height: 50px;
}

.title-btn {
    padding: 0;
    background: none;
    border: none;
}
</style>
