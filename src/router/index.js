import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: () => import('../views/ShopList.vue'),
    },
    {
    path: '/carrito',
    name: 'carrito',
      component: () => import('../views/CartView.vue'),
    },
    {
    path: '/confirmacion',
    name: 'confirmacion',
      component: () => import('../views/OrderConfirmationView.vue'),
    },
    {
      path: '/compra-exitosa',
      name: 'OrderCompleted',
      component: () => import('../views/OrderCompleted.vue'),
    },
    {
      path: '/conocenos',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/envios',
      name: 'envios',
        component: () => import('../views/Envios.vue'),
      },
      {
        path: '/encuentranos',
        name: 'encuentranos',
          component: () => import('../views/Encuentranos.vue'),
        },
        {
        path: '/calificanos',
        name: 'calificanos',
          component: () => import('../views/Rating.vue'),
          props: true,  // allows passing props to the component
          
        }
  ],
})

export default router
