import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../lib/supabase'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AdminSetup from '../views/AdminSetup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin-setup',
    name: 'AdminSetup',
    component: AdminSetup
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
