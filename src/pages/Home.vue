<template>
    <Navbar />
    <div class="container">Soy home</div>
    <div class="banner">BANNER</div>
    <img alt="Vue logo" src="@/modules/shared/assets/logo.jpg">
    <img alt="Vue logo" src="@/modules/shared/assets/logo.jpg">
    <p>Soy Home</p>
    <img alt="Vue logo" src="@/modules/shared/assets/logo.jpg">
    <img alt="Vue logo" src="@/modules/shared/assets/logo.jpg">
    <img alt="Vue logo" src="@/modules/shared/assets/logo.jpg">
</template>

<script>

import Navbar from '@/modules/shared/components/Navbar.vue'

export default {
    components: {
        Navbar
    }
}
</script>

<style scoped>
.banner {
    height: 722px;
    background-color: #c9c9c9;
}
</style>