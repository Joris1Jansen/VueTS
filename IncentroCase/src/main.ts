import { createApp } from "vue";
import App from "./App.vue";
// import VuelidatePlugin from "@vuelidate/core";
import router from "./router";
import { store } from "./store";

import BaseCard from "./components/BaseCard/BaseCard.vue";
import BaseSpinner from "./components/BaseSpinner/BaseSpinner.vue";
import BaseDialog from "./components/BaseDialog/BaseDialog.vue";

import "./css/index.css";

// createApp(App).mount('#app')

const app = createApp(App);

app.use(router);
app.use(store);
// app.use(VuelidatePlugin);

app.component("base-card", BaseCard);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
