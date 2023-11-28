<template>
    <header>
        <router-link :to="{ name: 'home' }"><img class="logo" src="@/modules/shared/assets/navbar/ASORON.svg"></router-link>
        <div class="center">
            <ul>
                <li><router-link :to="{ name: 'home' }">Inicio</router-link></li>
                <li><router-link :to="{ name: 'catalogo' }">Catalogo</router-link></li>
                <li><router-link :to="{ name: 'about' }">Sobre Nosotros</router-link></li>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li><img class="lupa" src="@/modules/shared/assets/navbar/lupa.svg"></li>
                <li><img class="shopping-bag" src="@/modules/shared/assets/navbar/shopping-bag.svg"></li>
                <li><router-link :to="{ name: 'profile' }"><img class="user"
                            src="@/modules/shared/assets/navbar/user.svg"></router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>

export default {

}
</script>

<style>
header {
    height: 124px;
    width: 100%;
    position: fixed;
    padding: 10px;
    background-color: #31212b;
    color: white;
    overflow: hidden;
}

.center {
    float: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.right {
    float: right;
    margin-right: 43px;
    margin-top: 27px;
}

li {
    float: left;
    padding: 10px;

}



ul {
    position: static;
    list-style-type: none;
    overflow: hidden;
}

.logo {
    display: block;
    margin-left: 43px;
    margin-top: 43px;
    width: 145px;
    height: 40px;
    float: left;
}


li a {
    text-decoration: none;
    color: #fdd08d;
    margin: 0 10px;
}

a.router-link-exact-active {

    font-weight: bold;
}

.user {
    color: #31212b;
}
</style>