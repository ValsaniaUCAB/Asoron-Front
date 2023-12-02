<template>
    <header>
        <div class="wrapper">
            <router-link :to="{ name: 'home' }"><img class="logo"
                    src="@/modules/shared/assets/navbar/ASORON.svg"></router-link>
            <nav class="center">
                <ul>
                    <li><router-link :to="{ name: 'home' }">Inicio</router-link></li>
                    <li><router-link :to="{ name: 'catalogo' }">Catalogo</router-link></li>
                    <li><router-link :to="{ name: 'eventos' }">Eventos</router-link></li>
                    <li><router-link :to="{ name: 'about' }">Sobre Nosotros</router-link></li>
                </ul>
            </nav>
            <nav class="right">
                <ul>
                    <li>
                        <img class="lupa" src="@/modules/shared/assets/navbar/lupa.svg">
                    </li>
                    <li>
                        <img class="shopping-bag" src="@/modules/shared/assets/navbar/shopping-bag.svg">
                    </li>
                    <li>
                        <router-link :to="{ name: 'login' }">
                            <img class="user" src="@/modules/shared/assets/navbar/user.svg">
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

export default {

}
</script>

<style>
header {
    width: 100%;
    height: 92px;
    position: fixed;
    padding: 10px;
    background-color: #31212b;
    color: white;
    overflow: hidden;
    z-index: 999;
    top: 0;
}

.wrapper {
    max-width: 1200px;
    margin: 0 auto;
}

header .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1em 0;
}

nav {
    float: right;
}

li {
    float: left;
    padding: 0 20px;

}



ul {
    display: block;
    list-style: none;
    gap: 1em;

}

.logo {
    float: left;
    margin: 0 10px;
    display: flex;
    width: 145px;
    height: 40px;
    position: relative;
}


li a {
    text-decoration: none;
    color: #fdd08d;
    margin: 0;
}

a.router-link-exact-active {

    font-weight: bold;
}

.user {
    color: #31212b;
}
</style>