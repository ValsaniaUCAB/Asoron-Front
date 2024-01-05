

export default {
    name: 'checkout-layout',
    component: () => import(/* webpackChunvkName: "checkout" */ '../layouts/CheckoutLayout'),
    children: [
        {
            path: '',
            name: 'checkout-cliente',
            component: () => import(/* webpackChunvkName: "checkout-index" */ '../pages/CheckoutCliente'),
        },
        {
            path: '',
            name: 'checkout-empleado',
            component: () => import(/* webpackChunvkName: "checkout-index" */ '../pages/CheckoutCliente'),
        },
        {
            path: 'addCard',
            name: 'addCard',
            component: () => import(/* webpackChunvkName: "addCard" */ '../pages/AddCard'),
        }
    ]
}