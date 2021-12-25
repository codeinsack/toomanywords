import Vue from 'vue';
import VueRouter from 'vue-router';
import Chat from '../pages/Chat.vue';
import SignIn from '../pages/SignIn.vue';
import Layout from '../components/Layout.vue';
import SignUp from '../pages/SignUp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/chat',
    meta: {
      authorized: true,
    },
    children: [
      {
        path: '/chat',
        name: 'chat',
        component: Chat,
        meta: {
          authorized: true,
        },
      },
    ],
  },
  {
    path: '/sign-in',
    name: 'signIn',
    component: SignIn,
  },
  {
    path: '/sign-up',
    name: 'signUn',
    component: SignUp,
  },
];

const router = new VueRouter({ mode: 'history', routes });

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.authorized)) {
    if (localStorage.getItem('user')) {
      next();
    } else {
      next('/sign-in');
    }
  } else {
    next();
  }
});

export default router;
