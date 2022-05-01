import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import $ from 'jquery';
const app = createApp(App)
app.use(store)
app.use(router)
app.use(Antd)
app.use($)
app.mount('#app')
