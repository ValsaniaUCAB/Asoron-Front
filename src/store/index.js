import { createStore } from 'vuex'

import catalogo from '@/modules/catalogo/store/catalogo'

const store = createStore({
    modules: {
        catalogo
    }
})

export default store