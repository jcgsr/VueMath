import Vue from 'vue'
import App from './components/App.vue'
import Footer from './components/Footer.vue'
import Soma from './components/Soma.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'

Vue.config.productionTip = false
Vue.component([Footer, Soma])

new Vue({
  render: h => h(App),
}).$mount('#app')
