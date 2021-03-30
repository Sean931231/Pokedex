import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Town from '@/views/Town.vue'
import Pokedex from '@/views/Pokedex.vue'
import Pokemon from '@/views/Pokemon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/region',
    name: 'Region',
    component: function () {
      return import(/* webpackChunkName: "pokemon" */ '@/views/Region.vue')
    }
  },
  {
    path: '/town/:id',
    name: 'Town',
    component: Town
  },
  {
    path: '/pokedex/:id',
    name: 'Pokedex',
    component: Pokedex
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
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: Pokemon
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
]

const router = new VueRouter({
  routes
})

export default router
