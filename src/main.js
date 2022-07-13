import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import tituloMixin from "./mixins/titulo";

Vue.config.productionTip = false;

Vue.mixin(tituloMixin);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

app.$mount("#app");
