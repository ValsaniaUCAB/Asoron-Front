import { createStore } from 'vuex'

import catalogo from '@/modules/catalogo/store/catalogo'
import eventos from '@/modules/eventos/store/eventos'
import auth from '@/modules/auth/store/auth'

const store = createStore({
    modules: {
        catalogo,
        eventos,
        auth
    }
})

export default store