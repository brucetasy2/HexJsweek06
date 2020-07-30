import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/front/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/front/About.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/front/Products.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/front/Cart.vue'),
  },
  {
    path: '/bill',
    name: 'bill',
    component: () => import('../views/front/Bill.vue'),
  },
  {
    path: '/dashboardlogin',
    name: 'dashboardlogin',
    component: () => import('../views/front/Dashboardlogin.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
