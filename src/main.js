import Vue from 'vue'
import App from './App.vue'
import store from './store'
import icons from "v-svg-icons";
import './assets/style.css'

Vue.config.productionTip = false
Vue.component('icon', icons)
new Vue({
  store,
  beforeCreate () {
    this.$store.commit('initializeStore')
  },
  render: h => h(App)
}).$mount('#app')
