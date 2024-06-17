import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGoogleMaps from '@fawmi/vue-google-maps'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives
})

app.use(VueGoogleMaps, {
    load: {
        async: true, // Ensure async loading
        key: 'AIzaSyC6kGql9amT7EcMqr_SIfxKrmGyzXf1STA',
        libraries: "places",
        v: 'weekly', // Usa la versión actual
    },
})

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')
