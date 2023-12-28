

export default {
    name: 'checkout-layout',
    component: () => import(/* webpackChunvkName: "checkout" */ '../layouts/CheckoutLayout'),
    children: [
        {
            path: '',
            name: 'checkout-index',
            component: () => import(/* webpackChunvkName: "checkout-index" */ '../pages/Checkout'),
        },
        {
            path: 'addCard',
            name: 'addCard',
            component: () => import(/* webpackChunvkName: "addCard" */ '../pages/AddCard'),
        }
    ]
}