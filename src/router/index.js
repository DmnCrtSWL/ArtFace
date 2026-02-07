import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ServicesView from '../views/ServicesView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/servicios',
    name: 'Services',
    component: ServicesView
  },
  {
    path: '/nosotros',
    name: 'About',
    component: AboutView
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
