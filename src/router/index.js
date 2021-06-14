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
    path: '/battle-tracker',
    name: 'Encounter Tracker',
    description: 'A util for tracking initiative and hp of players and monsters. Automatically sorts by initiative and ' +
        'updates color of player when HP drops to/below zero.',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Battle.vue')
  },
  {
    path: '/name-generator',
    name: 'Name Generator',
    description: 'The DM flails as the party targets the random beggar she had just improved into existence seconds earlier. ' +
        'Her mind races. "Where did I leave that list of names?!"',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Names.vue')
  },
  {
    path: '/wild-magic',
    name: 'Wild Magic Roller',
    description: 'The Sorcerer sighed as the streaks of flame finished leaping from their fingers. They had never gotten used ' +
        'to the feeling of the surge of magic. As the wrenching feeling of the Magic\'s power leaving their body ' +
        'started to dissipate they could feel the unfortunate side effect of their power welling in the pit of their ' +
        'stomach. "GET AWAY FROM ME! IT\'S HAPPENING AGAIN!" they cried to the rest of their party as fear gripped their mind. ' +
        '"Please don\'t let this surge be another fireball ..."',
    component: () => import(/* webpackChunkName: "about" */ '@/views/WildMagic.vue')
  },
  {
    path: '/monster-index',
    name: 'Monster Codex',
    description: 'A util for finding monsters based on Type, Alignment, CR, and Source Book and Page. Links to DnD Beyond ' +
        'stat block for monsters.',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Monsters.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
