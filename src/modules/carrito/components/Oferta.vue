<template>
    <CDropdown style="width: 100%">
        <CDropdownToggle @click="">{{ titulo }}</CDropdownToggle>
        <CDropdownMenu>
            <CDropdownItem v-if="ofertaList.length === 0">No hay descuentos para esta botella</CDropdownItem>
            <CDropdownItem v-else v-for="item in ofertaList" :key="item.id" @click="$emit('on-cambiarOferta', item)">
                {{ item.descuento }}% de descuento</CDropdownItem>
            <CDropdownItem @click="$emit('on-quitarOferta')">Quitar oferta</CDropdownItem>
        </CDropdownMenu>
    </CDropdown>
</template>

<script>
export default {
    emits: ['on-cambiarOferta', 'on-quitarOferta'],
    props: {
        ofertaList: {
            type: Array,
            required: true
        },
        oferta: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },
    computed: {
        titulo() {
            if (this.oferta.selected) {
                return this.oferta.nombre
            } else {
                return 'Oferta'
            }
        }
    },
}
</script>

<style></style>