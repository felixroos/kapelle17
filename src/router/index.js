/* eslint-disable */
import About from '@/components/About';
import Contact from '@/components/Contact';
import Dates from '@/components/Dates';
import Home from '@/components/Home';
import Media from '@/components/Media';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Home
    },
    {
      path: '/dates',
      name: 'Termine',
      component: Dates
    },
    {
      path: '/about',
      name: 'Info',
      component: About
    },
    {
      path: '/media',
      name: 'Media',
      component: Media
    },
    {
      path: '/contact',
      name: 'Kontakt',
      component: Contact
    },
  ]
});
