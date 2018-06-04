/* eslint-disable */
import About from '@/components/About';
import Events from '@/components/Events';
import Home from '@/components/Home';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
