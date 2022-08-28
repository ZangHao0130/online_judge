import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'uno.css'
import App from './App.vue'
import router from './router';
import './utils/monaco'
import './assets/css/common.less'
import animate from 'animate.css';

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(animate)
    .use(router)
    .mount('#app')
