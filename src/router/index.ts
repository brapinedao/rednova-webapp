import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// vistas
import homeView from '@/views/home-view.vue'
import servicesView from '@/views/services-view.vue'
import contactView from '@/views/contact-view.vue'
import usView from '@/views/us-view.vue'
import loginView from '@/views/login-view.vue'
import adminView from '@/views/admin-view.vue'

// layouts
import defaultLayout from '@/layouts/default/DefaultLayout.vue'
import authLayout from '@/layouts/auth/AuthLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: defaultLayout,
    children: [
      { path: '', name: 'home', component: homeView },
      { path: 'servicios', name: 'servicios', component: servicesView },
      { path: 'nosotros', name: 'nosotros', component: usView },
      { path: 'contacto', name: 'contacto', component: contactView },
      { path: 'admin', name: 'administrar', component: adminView },
    ],
  },
  {
    path: '/login',
    component: authLayout,
    children: [{ path: '', name: 'login', component: loginView }],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
