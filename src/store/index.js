import { createStore } from 'vuex'

import catalogo from '@/modules/catalogo/store/catalogo'
import eventos from '@/modules/eventos/store/eventos'

const store = createStore({
    modules: {
        catalogo,
        eventos
    }
})

export default store