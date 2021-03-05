import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Service = () => import (/* webpackChunkName: "service" */'ServiceApp/ServicePage')
const Client = () => import (/* webpackChunkName: "client" */'ClientApp/ClientPage')
const Schedule = () => import (/* webpackChunkName: "schedule" */'ScheduleApp/SchedulePage')

const routes = [
  {
    path: '/clients',
    name: 'Client',
    component: Client
  },
  {
    path: '/services',
    name: 'Service',
    component: Service
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;