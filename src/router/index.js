import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import todo from '../views/todo.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: index
  },
  {
    path: '/todo',
    name: '',
    component: todo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
