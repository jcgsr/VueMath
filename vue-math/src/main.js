import Vue from 'vue'
import App from './components/App.vue'
import Footer from './components/Footer.vue'
import Soma from './components/Soma.vue'
import Subtracao from './components/Subtracao.vue'
import Multiplicacao from './components/Multiplicacao.vue'
import Divisao from './components/Divisao.vue'
import Quadrado from './components/Quadrado.vue'
import Cubo from './components/Cubo.vue'
import Potencia from './components/Potencia.vue'
import Porcentagem from './components/Porcentagem.vue'
import RaizQuadrada from './components/RaizQuadrada.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'

Vue.config.productionTip = false
Vue.component([Footer, Soma, Subtracao, Multiplicacao, Divisao, Quadrado,
  Cubo, Potencia, Porcentagem, RaizQuadrada
])

new Vue({
  render: h => h(App),
}).$mount('#app')
