import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";

Vue.config.productionTip = false;

Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
window.onload = function() {
  window.scrollTo(0, 10000);
  console.log(document.body.scrollHeight);
};
if (document.documentElement.clientWidth > 500) {
  window.alert("请用手机打开本页面，以保证浏览的效果");
  const img = document.createElement("img");
  img.src = "morneyCode.png";
  img.id = "morneyCode";
  img.style.position = "fixed";
  img.style.left = "50%";
  img.style.top = "50%";
  img.style.transform = "translate(-50%,-50%)";
  img.style.boxShadow = "0 0 10px rgba(0,0,0.25)";
  document.body.appendChild(img);
  document.body.addEventListener(
    "click",
    function(event) {
      if (event.target) {
        if ((event.target as HTMLUListElement).id !== "morneyCode") {
          img.remove();
        }

      }
    },
    true
  );
}
