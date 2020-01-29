import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/custom.scss'

Vue.config.productionTip = false

import {
  CardPlugin,
  ButtonPlugin,
  AlertPlugin,
  LayoutPlugin,
  FormSelectPlugin,
  FormCheckboxPlugin
} from 'bootstrap-vue'
Vue.use(CardPlugin)
Vue.use(ButtonPlugin)
Vue.use(AlertPlugin)
Vue.use(LayoutPlugin)
Vue.use(FormSelectPlugin)
Vue.use(FormCheckboxPlugin)

import VueCurrencyFilter from 'vue-currency-filter'
Vue.use(VueCurrencyFilter, {
  symbol: 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')