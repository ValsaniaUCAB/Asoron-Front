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
            <div class="total">Total: ${{ item.afiliado.precio * item.cantidad }}</div>
        </div>
    </div>

    <div v-if="(item.botella && oferta.selected === false)" class="caja">
        <div class="info">
            <img :src="item.botella.images[0].img_url" alt="Imagen que no carga">
            <div class="info-afiliado">
                <div class="nombre">{{ item.botella.nombre }}</div>
                <Oferta :oferta="oferta" :ofertaList="ofertaList" @on-cambiarOferta="cambiarOferta"
                    @on-quitarOferta="quitarOferta" />
                <!-- <CDropdown style="width: 100%">
                    <CDropdownToggle @click="">Oferta</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem v-if="ofertaList.length === 0">No hay descuentos para esta botella</CDropdownItem>
                        <CDropdownItem v-else v-for="item in ofertaList" :key="item.id" @click="cambiarOferta(item)">
                            {{ item.descuento }}% de descuento</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown> -->
            </div>
        </div>
        <div class="monto-afiliado">
            <div>
                <div class="precio"> ${{ item.botella.precio }}</div>
                <div class="cantidad">x{{ item.cantidad }}</div>
            </div>
            <hr>
            <div class="total">Total: ${{ item.botella.precio * item.cantidad }}</div>
        </div>
    </div>

    <div v-if="item.botella && oferta.selected === true" class="caja">
        <div class="info">
            <img :src="item.botella.images[0].img_url" alt="Imagen que no carga">
            <div class="info-afiliado">
                <div class="nombre">{{ item.botella.nombre }}</div>
                <!-- <CDropdown style="width: 100%">
                    <CDropdownToggle @click="">Oferta</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem v-if="ofertaList.length === 0">No hay descuentos para esta botella</CDropdownItem>
                        <CDropdownItem v-else v-for="item in ofertaList" :key="item.id" @click="cambiarOferta(item)">
                            {{ item.descuento }}% de descuento</CDropdownItem>
                        <CDropdownItem @click="quitarOferta">Quitar oferta</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown> -->
                <Oferta :oferta="oferta" :ofertaList="ofertaList" @on-cambiarOferta="cambiarOferta"
                    @on-quitarOferta="quitarOferta" />
            </div>
        </div>
        <div class="monto-afiliado">
            <div>
                <span class="precio-sin-desc">${{ item.botella.precio }}</span>
                <span class="precio-con-desc"> ${{ (item.botella.precio - (item.botella.precio *
                    oferta.descuento / 100)).toFixed(2) }}</span>
                <div class="cantidad">x{{ item.cantidad }}</div>
            </div>
            <hr>
            <div class="total">Total: ${{ (item.botella.precio - (item.botella.precio *
                oferta.descuento / 100)).toFixed(2) * item.cantidad }}</div>
        </div>
    </div>
</template>

<script>
import { CDropdown } from '@coreui/vue'
import getOfertasList from '../helpers/getOfertasList'
import Oferta from './Oferta'


export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    components: {
        CDropdown,
        Oferta
    },
    data() {
        return {
            oferta: {
                descuento: 0,
                nombre: '',
                selected: false
            },
            ofertaList: []
        };
    },
    methods: {
        cambiarOferta(item) {
            this.oferta.descuento = item.descuento;
            this.oferta.nombre = item.nombre;
            this.oferta.selected = true;

            console.log()
        },
        quitarOferta() {
            this.oferta.descuento = 0;
            this.oferta.nombre = '';
            this.oferta.selected = false;
        },
        async getOfertas() {
            if (this.item.botella) {
                try {
                    this.ofertaList = await getOfertasList(this.item.botella.id)
                    console.log(this.ofertaList)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    },
    mounted() {
        this.getOfertas();
        if (this.item.oferta) {
            this.oferta.descuento = this.item.oferta.descuento;
            this.oferta.nombre = this.item.oferta.nombre;
            this.oferta.selected = true;
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
    align-items: flex-start;
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
</style>
