import Vue from 'Vue'
import cell from './cell.vue'
import 'babel-polyfill'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(cell)
})
