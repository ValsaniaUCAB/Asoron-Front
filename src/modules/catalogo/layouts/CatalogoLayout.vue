<template>
    <Navbar />
    <div class="container">Soy Layout de Catalogo</div>
    <div v-if="isLoading">
        <div class="alert-info text-center mt-5">
            Espere por favor
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>
    <div v-else>
        <router-view />
    </div>
</template>


<script>

import { mapActions, mapState } from 'vuex'
import Navbar from '@/modules/shared/components/Navbar.vue'

export default {
    components: {
        Navbar
    },
    computed: {
        ...mapState('catalogo', ['isLoading', 'ronList'])
    },
    methods: {
        ...mapActions('catalogo', ['cargarRones'])
    },
    created() {
        this.cargarRones()
    }
}
</script>

<style></style>