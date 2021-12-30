// import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const message = error.response?.data?.message;
//     console.log(message);
//     switch (error.response?.status) {
//       case 401:
//         // LOGOUT();
//         break;
//       case 403: {
//         // LOGOUT();
//         break;
//       }
//       default:
//         break;
//     }
//     return Promise.reject(error);
//   }
// );
//
// axios.interceptors.request.use(function (config) {
//   const user = localStorage.getItem('user');
//   if (user) {
//     config.headers.Authorization = JSON.parse(user)?.token;
//     return config;
//   }
// });

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
