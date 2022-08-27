import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'uno.css'
import App from './App.vue'
import router from './router';
import './utils/monaco'

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
