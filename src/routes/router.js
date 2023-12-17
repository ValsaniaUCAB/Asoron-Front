import { createRouter, createWebHashHistory } from "vue-router";

import catalogoRouter from '@/modules/catalogo/router'
import eventosRouter from '@/modules/eventos/router'
import authRouter from '@/modules/auth/router'
import profileRouter from '@/modules/profile/router'

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/Home'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/About'),
    },
    {
        path: '/profile',
        ...profileRouter
    },
    {
        path: '/catalogo',
        ...catalogoRouter
    },
    {
        path: '/eventos',
        ...eventosRouter
    },
    {
        path: '/',
        ...authRouter
    },
    {
        // Cualquier Path que no sea ningino de los declarados iria al AboutPage
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound'),
        // redirect: '/home'
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router