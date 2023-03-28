// ** Vue Imports
import { createPinia } from 'pinia'
import { createApp } from 'vue'

// ** Plugin Imports
import i18n from '@/plugins/i18n'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// ** App Imports
import App from './App.vue'
import router from './router'

// ** CSS Imports
import 'element-plus/dist/index.css'
import './style/index.scss'
import './style/tailwind.css'

// ** App Use
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app
    .use(createPinia())
    .use(router)
    .use(i18n)

app.mount('#app')
