import { createApp } from 'vue'
import App from './App.vue'
// import './style.css'

import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')

