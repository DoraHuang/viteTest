import { createApp } from 'vue'
import router from '/@/router'
import store from '/@/store'
import App from '/@/App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '/@/assets/style.less'

createApp(App)
.use(router)
.use(store)
.use(Antd)
.mount('#app')

