<template>
    <div>Soy Catalogo</div>
    <div>
        <div class="mx-5">Productos
            <div class="px-2 pt-2">
                <input type="text" placeholder="Buscar Entrada" v-model="term">
            </div>
        </div>
        <div class="d-flex">
            <div class="col-2">
                Filtros
            </div>
            <div class="d-flex">
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