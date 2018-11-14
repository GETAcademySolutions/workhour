import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Settings from '@/components/Settings';
import TimeTracker from '@/components/TimeTracker';
import Reports from '@/components/Reports';
import Projects from '@/components/Projects';
import Signup from '@/components/Signup';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/TimeTracker',
      name: 'TimeTracker',
      component: TimeTracker
    },
    {
      path: '/Reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ]
});
