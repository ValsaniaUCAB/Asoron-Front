<template>
    <Navbar />
    <router-view />
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