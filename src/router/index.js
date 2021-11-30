import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/safety',
    name: 'Safety',
    component: () => import(/* webpackChunkName: "about" */ '../views/Safety.vue')
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactPage.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "Events" */ '../views/Events.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "Events" */ '../views/About.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
