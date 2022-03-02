import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import lodash from '../public/lodash.js'
const _ = lodash()
createApp(App, { tip: 'bbbxxxx' })
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mixin({})
  .mount('#app')
