import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';
//将引入的组件注册为全局Vue组件
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
