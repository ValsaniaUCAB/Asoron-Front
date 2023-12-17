

export default {
    name: 'profile',
    component: () => import(/* webpackChunvkName: "auth" */ '../layouts/ProfileLayout'),
    children: [
        {
            path: 'natural',
            name: 'natural',
            component: () => import(/* webpackChunvkName: "Login" */ '../pages/PerfilClienteNatural'),
        },
        {
            path: 'juridico',
            name: 'juridico',
            component: () => import(/* webpackChunvkName: "Register" */ '../pages/PerfilClienteJuridico'),
        }
    ]
}