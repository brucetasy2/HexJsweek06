import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/front/Home.vue'),
    children: [
      {
        path: '',
        // component: () => import('../views/front/Home.vue'),
        component: () => import('../views/front/Index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/front/Product.vue'),
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
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('../views/front/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/dashboard/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/front/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/Orders.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
