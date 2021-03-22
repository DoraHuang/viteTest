import { createApp } from 'vue'
import router from '/@/router'
import store from '/@/store'
import App from '/@/App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '/@/assets/style.less'
import axios from 'axios'
import VueAxios from 'vue-axios'
createApp(App)
.use(router)
.use(store)
.use(Antd)
.use(VueAxios, axios)
.mount('#app')

