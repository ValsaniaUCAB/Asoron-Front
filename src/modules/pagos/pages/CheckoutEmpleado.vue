<template>
    <div v-if="!isLoading"></div>
    <div v-else class="box">
        <div class="datos-cliente">
            <div class="encabezado">
                <h1 class="titulo">Asoron</h1>
                <button class="cancel-btn" @click="deleteItem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                        stroke="#31212b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="subtitulo">
                Checkout
            </div>
            <div class="tarjetas-box">
                <p>Seleccionar cliente</p>
                <CDropdown>
                    <CDropdownToggle>{{ cliente.nombre }}</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem @click="changeTipoCliente('natural')">Cliente Natural</CDropdownItem>
                        <CDropdownItem @click="changeTipoCliente('juridico')">Cliente Juridico</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
                <input type="text" v-model="credencialCliente" @keypress.enter="getInfo" />
                <div class="botones">
                    <AddClienteNatural v-if="activeClienteNatural" @on-register="closeAniadirClienteNatural" />
                    <button class="button-18" @click="openAniadirClienteNatural">Añadir Cliente Natural</button>
                    <AddClienteJuridico v-if="activeClienteJuridico" @on-register="closeAniadirClienteJuridico" />
                    <button class="button-18" @click="openAniadirClienteJuridico">Añadir Cliente Juridico</button>
                </div>
                <div v-if="cliente.info.nombre">
                    <div>{{ cliente.info.nombre }}</div>
                    <div>{{ cliente.info.cedula }}</div>
                    <div>{{ cliente.info.rif }}</div>
                    <div>{{ cliente.info.direccion }}</div>
                    <div>{{ cliente.info.telefono }}</div>
                </div>
                <div v-if="cliente.info.denominacionComercial">
                    <div>{{ cliente.info.denominacionComercial }}</div>
                    <div>{{ cliente.info.rif }}</div>
                    <div>{{ cliente.info.direccion }}</div>
                    <div>{{ cliente.info.telefono }}</div>
                </div>
            </div>
            <div class="tarjetas-box">
                <p>Seleccionar Tarjetas</p>
                <div class="tarjetas">
                    $
                </div>
            </div>
            <div class="tarjetas-box">
                <p>Direccion</p>
                <div class="direccion">
                    <input type="text" v-model="direccion" />
                </div>
                <Lugar @on-click="setFkDireccion"></lugar>
            </div>

            <div class="tarjetas-box">
                <p>Puntos</p>
                <div class="Puntos">
                    <div>Puntos Acumulados</div>
                    <input type="number" v-model="puntos" />
                </div>
            </div>
        </div>

        <div class="datos-compra">
            <div>
                <div class="titulo">
                    Productos
                </div>
                <div class="productos-box">
                    <div class="producto" v-for="(item, index) in items" :key="item.id">
                        <div>
                            <span>{{ index + 1 }}.- </span>
                            <span v-if="item.afiliado">{{ item.afiliado.nombre }}</span>
                            <span v-if="item.botella">{{ item.botella.nombre }}</span>
                            <span v-if="item.evento">{{ item.evento.nombre }}</span>
                        </div>
                        <div>
                            <span v-if="item.afiliado">${{ item.afiliado.precio }}</span>
                            <span v-if="item.botella && !item.oferta">${{ item.botella.precio }}</span>
                            <span v-if="item.botella && item.oferta">
                                <span class="precio-sin-desc">${{ item.botella.precio }}</span>
                                ${{ (item.botella.precio - (item.botella.precio * item.oferta.descuento / 100)).toFixed(2)
                                }}
                            </span>
                            <span v-if="item.evento">${{ item.evento.precio }}</span>
                            <span> x{{ item.cantidad }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr>
                <div class="monto-total">${{ montoTotal.toFixed(2) }}</div>
                <button @click="vender()">Pagar</button>
            </div>
        </div>
        <BackToHome />
    </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import Swal from 'sweetalert2'
import { CDropdown } from '@coreui/vue';

import Lugar from '@/modules/auth/components/Lugar'
import AddClienteNatural from '../components/AddClienteNatural'
import AddClienteJuridico from '../components/AddClienteJuridico';
import BackToHome from '@/modules/auth/components/BackToHome'

import getTarjetas from '../helpers/getTarjetas'
import postVenta from '../helpers/postVenta'
import { getInfoNatural, getInfoJuridico } from '../helpers/getInfoCliente'

export default {
    components: {
        Lugar,
        CDropdown,
        AddClienteNatural,
        AddClienteJuridico,
        BackToHome
    },
    data() {
        return {
            cliente: {
                tipo: null,
                nombre: 'Tipo de cliente',
                info: {}
            },

            activeClienteNatural: false,
            activeClienteJuridico: false,

            credencialCliente: '',

            direccion: '',
            fkDireccion: '',
            puntos: 0,
            active: false,
            listaTarjetas: null,
            tarjetaId: null,
            puntosId: null,
            puntosPrecio: 15,
            maxPuntos: 0,
        };
    },
    computed: {
        ...mapState('carrito', ['items', 'uuid']),
        ...mapState('auth', ['user']),
        isLoading() {
            if (!this.user || !this.items || this.items.length === 0) {
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false,
                })
                Swal.showLoading()
                return false
            } else {
                Swal.close()
                return true
            }
        },
        montoTotal() {
            let montoFinal = 0
            for (const item of this.items) {
                if (item.botella) {
                    if (item.oferta) montoFinal += (item.botella.precio - (item.botella.precio * item.oferta.descuento / 100)) * item.cantidad
                    else montoFinal += item.botella.precio * item.cantidad
                }
                if (item.evento) montoFinal += item.evento.precio * item.cantidad
                if (item.afiliado) montoFinal += item.afiliado.precio * item.cantidad
            }
            return montoFinal
        },
        montoPuntos() {
            let monto = 0
            monto = this.puntos * this.puntosPrecio
            return monto
        },
        montoTarjeta() {
            let monto = 0
            monto = this.montoTotal - this.montoPuntos
            return Number.parseFloat(monto.toFixed(2))
        }
    },
    methods: {
        ...mapMutations('carrito', ['endCarrito']),
        ...mapActions('carrito', ['getCarritoCliente']),
        async getInfo() {
            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false,
            })
            Swal.showLoading()
            if (this.cliente.tipo === null) {
                Swal.fire({
                    position: "bottom-end",
                    title: "Debe seleccionar el tipo de cliente",
                    background: "#F94646",
                    color: "#fff",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: false
                });
                return
            }
            if (this.cliente.tipo === 'natural') {
                try {
                    this.cliente.info = await getInfoNatural(this.credencialCliente)
                    Swal.fire({
                        position: "bottom-end",
                        title: "Cliente Encontrado",
                        background: "#42FF00",
                        color: "#fff",
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: false
                    });
                } catch (error) {
                    Swal.fire('Error', `${error}`, 'error')

                    console.log(error)
                }
            }
            if (this.cliente.tipo === 'juridico') {
                try {
                    this.cliente.info = await getInfoJuridico(this.credencialCliente)
                    Swal.fire({
                        position: "bottom-end",
                        title: "Cliente Encontrado",
                        background: "#42FF00",
                        color: "#fff",
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: false
                    });
                } catch (error) {
                    Swal.fire('Error', `${error}`, 'error')

                    console.log(error)
                }
            }
        },
        changeTipoCliente(tipo) {
            this.cliente.tipo = tipo
            if (tipo === 'natural') {
                this.cliente.nombre = 'Cliente Natural'
            }
            else {
                this.cliente.nombre = 'Cliente Juridico'
            }
        },
        openAniadirClienteNatural() {
            this.activeClienteNatural = true
        },
        closeAniadirClienteNatural() {
            this.activeClienteNatural = false
        },
        openAniadirClienteJuridico() {
            this.activeClienteJuridico = true
        },
        closeAniadirClienteJuridico() {
            this.activeClienteJuridico = false
        },
        openAddCard() {
            this.active = true
        },
        async closeAddCard() {
            this.active = false
            this.listaTarjetas = await getTarjetas()
        },
        setFkDireccion(value) {
            this.fkDireccion = value
            console.log(value)
        },
        async vender() {
            if (this.validar()) {
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false,
                })
                Swal.showLoading()
                const data = {
                    venta_direccion: this.direccion,
                    fk_vent_direccion: this.fkDireccion,
                    uuid_carrito: this.uuid,
                    tarjeta_id: this.tarjetaId,
                    cantidad_tarjeta: Number.parseFloat(this.montoTarjeta.toFixed(2)),
                    puntos_id: this.puntosId,
                    cantidad_puntos: this.montoPuntos
                }
                try {
                    console.log(data)
                    await postVenta(data)
                    Swal.fire('Success', 'Pago realizado con exito', 'success').then((result) => {
                        if (result.isConfirmed) {
                            this.endCarrito()
                            this.getCarritoCliente()
                            this.$router.push({ name: 'home' });
                            Swal.close()
                        }
                    });
                } catch (error) {
                    console.log(error)
                    Swal.fire('Error', `Problema al registrar el pago\n${error.response.data.error}`, 'error')
                }
            }
        },
        validar() {
            if (this.direccion === '' || this.tarjetaId === null || this.fkDireccion === '' || this.puntosId === null) {
                Swal.fire({
                    position: "bottom-end",
                    title: "Debe llenar todos los campos",
                    background: "#F94646",
                    color: "#fff",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: false
                });
                return false
            }
            return true
        },
    },
    async mounted() {

    }
    // mounted() {
    //     if (!this.user) {
    //         this.$router.push({ name: 'login' })
    //     }
    // },

}
</script>

<style lang="scss" scoped>
.precio-sin-desc {
    text-decoration: line-through;
    color: red;
}

.box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    background-color: #fff;
    padding: 80px 135px;
}

.datos-cliente {
    border: 1px solid #000;
    flex-grow: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: flex-start;
}

.datos-compra {
    border: 1px solid #000;
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.titulo {
    color: #02021D;
    font-family: Brothers;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
}

.subtitulo {
    color: #02021D;
    margin-top: 20px;
}

.productos-box {
    width: 100%;

}

.producto {
    margin: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.tarjetas-box {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: flex-start;
    width: 100%;

    & p {
        font-size: 16px;
        font-style: normal;
        line-height: 16px;
        margin-left: 0;
    }


}

.tarjetas {
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
    padding: 24px;
}

.borde {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #E3E5ED;
}

.tarjeta {
    display: flex;
    flex-direction: row;
    justify-content: top;
    align-items: flex-start;
    padding: 24px;
    width: 100%;
    margin: 5px 0;

    & input {
        margin-right: 16px;
        width: 20px;
        height: 20px;
    }
}

.botones {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}

.monto-total {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;
    font-size: 16px;
    font-style: normal;
    line-height: 16px;
    font-weight: 700;
    margin-bottom: 10px;
}

.button-18 {
    align-items: center;
    background-color: #FDD08D;
    border: 0;
    border-radius: 100px;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 800;
    justify-content: center;
    line-height: 20px;
    max-width: 480px;
    min-height: 40px;
    min-width: 0px;
    overflow: hidden;
    padding: 0px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    touch-action: manipulation;
    transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    margin-right: 20px;

    &:hover,
    :focus {
        background-color: #e6bd7f;
        color: #000;
    }

    &:active {
        background: #c09e6a;
        color: rgb(255, 255, 255, .7);
    }

    &:disabled {
        cursor: not-allowed;
        background: rgba(0, 0, 0, .08);
        color: rgba(0, 0, 0, .3);
    }

    &.eliminar {
        background-color: #fff;
        color: #000;
        margin-right: 0;
        border: 1px solid #31212B;
        margin-right: 10px;
    }
}

.encabezado {
    display: flex;
    width: 100%;
}

.cancel-btn {
    background: none;
    border: none;
    padding: 0;
    margin-left: auto;

}
</style>