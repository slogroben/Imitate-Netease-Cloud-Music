import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemMusic from '../views/ItemMusic.vue'
import MusicView from '../views/MusicView.vue'
import Search from '../views/Search.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/ItemMusic',
    name: 'itemMusic',
    component: ItemMusic
  },
  {
    path: '/musicview',
    name: 'musicview',
    component: MusicView
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
