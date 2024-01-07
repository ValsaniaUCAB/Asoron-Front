<template>
    <Navbar />
    <router-view />
</template>

<script>

import Navbar from '@/modules/shared/components/Navbar.vue'
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        Navbar
    },
    methods: {
        ...mapActions('eventos', ['cargarEventos']),
    },
    created() {
        this.cargarEventos()
    }
}
</script>

<style>

</style>