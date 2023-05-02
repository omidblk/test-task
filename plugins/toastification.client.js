import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
  position: "top-right",
  timeout: 3000,
};
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options);
});
