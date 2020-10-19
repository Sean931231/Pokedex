import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Embed from 'v-video-embed'
import { Plugin } from 'vue-responsive-video-background-player'

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.prototype.$api = axios
Vue.use(VueAxios, axios)
Vue.use(Embed);
Vue.use(Plugin);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
