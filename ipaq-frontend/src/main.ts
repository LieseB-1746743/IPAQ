import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// Import Vue form generator
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";  // optional full css additions
Vue.use(VueFormGenerator);
Vue.use(IconsPlugin);

// Import Vue bootstrap datetimepicker
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
Vue.use(datePicker);

import "vue-multiselect/dist/vue-multiselect.min.css";
import Multiselect from 'vue-multiselect';
Vue.component('multiselect', Multiselect);

import "bootstrap-select/dist/css/bootstrap-select.min.css";


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
