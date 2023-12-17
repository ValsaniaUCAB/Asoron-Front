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
    methods: {
        ...mapActions('catalogo', ['cargarRones']),
        ...mapActions('auth', ['findUser'])
    },
    async created() {
        this.cargarRones()
    }
}
</script>

<style></style>