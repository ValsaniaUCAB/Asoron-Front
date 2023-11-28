<template>
    <div>Soy Catalogo</div>
    <h1 v-if="!ronList">Cargando... Por favor Espere</h1>
    <div v-else>
        <div class="prod mx-5">Productos
            <div class="px-2 pt-2">
                <input type="text" class="form-control" placeholder="Buscar Entrada" v-model="term">
            </div>
        </div>
        <div class="d-flex">
            <div class="col-2">
                Filtos
            </div>
            <div class=" col d-flex">
                <li v-for="ron in ronesByTerm">
                    <Ron :ron="ron" />
                </li>
            </div>
        </div>
    </div>
</template>

<script>

import Ron from "@/modules/catalogo/components/Ron";
import { mapGetters, mapState } from 'vuex';
export default {
    components: {
        Ron
    },
    data() {
        return {
            ronList: null,
            term: ''
        }
    },
    methods: {

    },
    computed: {
        ...mapState('catalogo', {
            rones: 'ronList'
        }),
        ...mapGetters('catalogo', ['getRonesByTerm']),
        ronesByTerm() {
            return this.getRonesByTerm(this.term)
        }
    },
    mounted() {
        this.ronList = this.rones
    }
}
</script>

<style scoped>
.prod {
    text-align: left
}

li {
    list-style-type: none;
}
</style>