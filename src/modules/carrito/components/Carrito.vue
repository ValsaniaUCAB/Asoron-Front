<template>
    <div class="modal-background fade-in" @click.self="$emit('on-close')">
        <!-- El click.self permite que la emision sea solo en el componente padre y no en los hijos -->
        <div class="modal-container">
            <div class="box">
                <div class="encabezado">
                    <h2 class="asoron">ASORON</h2>
                    <div v-if="user === null">
                        <h3 class="enc-tit">Bienvenido! Guest</h3>
                    </div>
                    <div v-else>
                        <h3 v-if="user.fk_usua_clie_natu" class="enc-tit">Bienvenido! {{ user.data.nombre }} </h3>
                        <h3 v-if="user.fk_usua_clie_juri" class="enc-tit">Bienvenido! {{ user.data.razonSocial }} </h3>
                        <h3 v-if="user.fk_usua_clie_juri === null && user.fk_usua_clie_natu === null" class="enc-tit">
                            Bienvenido! {{ user.data.nombre }} </h3>
                    </div>
                </div>
                <div class="items-container">
                    <li v-for="(item, index) in items" :key="item.id">
                        <item @on-calcularTotal="addTotal" :item="item" :index="index"></item>
                    </li>
                </div>
                <div class="total-container" v-if="user">
                    <div class="monto"><span>Monto total:</span><span>${{ TotalFinal }}</span></div>
                    <button @click="pushToCheckout">CHECKOUT</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

import item from './ItemCarrito'

export default {
    emits: ['on-close'],             // defino las emisiones que puede hacer el componente
    props: {

    },
    components:
    {
        item
    },
    data() {
        return {
            TotalFinal: 0,
        };
    },
    computed: {
        ...mapState('carrito', ['items', 'montoTotal', 'uuid']),
        ...mapState('auth', ['user']),
    },
    methods: {
        ...mapActions('carrito', ['modifyItemCarrito']),
        ...mapMutations('carrito', ['changeMontoTotal', 'vaciarCarrito']),
        addTotal(total) {
            if (total[1]) {
                this.TotalFinal = this.TotalFinal - parseFloat(total[1])
            }
            if (total[0]) {
                this.TotalFinal = this.TotalFinal + parseFloat(total[0])
            }
            this.TotalFinal = Math.round(this.TotalFinal * 100) / 100;
            this.changeMontoTotal(this.TotalFinal)
        },
        pushToCheckout() {
            this.$router.push({ name: 'checkout' })
        }

    },
    unmounted() {
        this.vaciarCarrito()
        for (const item of this.items) {
            let data = {}
            if (item.botella) {
                if (item.oferta) {
                    data = {
                        carri_item_cantidad: item.cantidad,
                        fk_carri_item_inve_tiend: item.botella.idTienda,
                        fk_carri_item_ofer_ron: item.oferta.id,
                        fk_carri_item_entr_evento: item.evento,
                        fk_carri_item_afil: item.afiliado,
                        carri_item_id: item.id
                    }
                } else {
                    data = {
                        carri_item_cantidad: item.cantidad,
                        fk_carri_item_inve_tiend: item.botella.idTienda,
                        fk_carri_item_ofer_ron: item.oferta,
                        fk_carri_item_entr_evento: item.evento,
                        fk_carri_item_afil: item.afiliado,
                        carri_item_id: item.id
                    }
                }
            }
            if (item.evento) {
                data = {
                    carri_item_cantidad: item.cantidad,
                    fk_carri_item_inve_tiend: item.botella,
                    fk_carri_item_ofer_ron: item.oferta,
                    fk_carri_item_entr_evento: item.evento.idEntrada,
                    fk_carri_item_afil: item.afiliado,
                    carri_item_id: item.id
                }
            }
            if (item.afiliado) {
                data = {
                    carri_item_cantidad: item.cantidad,
                    fk_carri_item_inve_tiend: item.botella,
                    fk_carri_item_ofer_ron: item.oferta,
                    fk_carri_item_entr_evento: item.evento,
                    fk_carri_item_afil: item.afiliado.id,
                    carri_item_id: item.id
                }
            }
            this.modifyItemCarrito({ id: item.id, dataToSave: data })
        }
        console.log('carritoActualizado')
    }

}
</script>

<style scoped>
.modal-background {
    position: fixed;
    margin-top: 92px;
    top: 0;
    left: 0;
    width: 100vw;
    height: 90vh;
    z-index: 900;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: flex-end;
}

.modal-container {
    width: 610px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    z-index: 900;
    padding: 20px;
}

.box {
    display: flex;
    flex-direction: column;    
    
}

.encabezado {
    height: 9%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1%;
}
.items-container {
    max-height: 70vh;
    overflow-y: scroll;
}

.asoron {
    font-family: 'Brothers', sans-serif;
    font-weight: 800;
    font-size: 36px;
    color: #fdd08d;
    align-self: flex-start;
    margin: 0;
    height: fit-content;
}

.enc-tit {
    font-family: 'Brothers', sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: #31212B;
    text-align: left;
    margin: 0;
}

.total-container {
    display: flex;
    flex-direction: column;
    height: 10vh;
}

.monto {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}


.fade-in {
    animation: fadeIn ease-out 0.2s;
    -webkit-animation: fadeIn ease-out 0.2s;
    -moz-animation: fadeIn ease-out 0.2s;
    -o-animation: fadeIn ease-out 0.2s;
    -ms-animation: fadeIn ease-out 0.2s;
}

.items-container li {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0 20px 0 10px;

}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-moz-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-o-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-ms-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
