import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueWindow from '@snowdream39/vue-window'
import '@snowdream39/vue-window/dist/index.css'
import '@snowdream39/vue-window/dist/style.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueWindow)
app.mount('#app')
