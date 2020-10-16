import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Region from '@/views/Region.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/region',
    name: 'Region',
    component: Region
  },
  {
    path: '/town',
    name: 'Town',
    component: function () {
      return import(/* webpackChunkName: "pokemon" */ '../views/Town.vue')
    }
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "pokemon" */ '../views/Pokemon.vue')
    }
  },
  {
    path: '/generation',
    name: 'Generation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "Generation" */ '../views/Generation.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
