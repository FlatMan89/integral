import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
