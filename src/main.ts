import { createApp } from 'vue'

import 'element-plus/dist/index.css'

import App from './App.vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import router from './router'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/css/elegantBlue.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)

// 注册指令
import directive from './directive'
directive(app)

app.mount('#app')
