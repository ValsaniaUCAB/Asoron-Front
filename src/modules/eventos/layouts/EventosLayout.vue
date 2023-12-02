<template>
    <Navbar />
    <div class="container">Soy Layout eventos</div>
    <!-- <div v-if="isLoading">
        <div class="alert-info text-center mt-5">
            Espere por favor
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>
    <div v-else>
        <router-view />
    </div> -->
    <router-view />
</template>

<script>

import Navbar from '@/modules/shared/components/Navbar.vue'
import { mapState } from 'vuex';

export default {
    components: {
        Navbar
    },
    // computed: {
    //     ...mapState('eventos', ['eventosList'])
    // }

}
</script>

<style></style>