import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Client = () => import (/* webpackChunkName: "client" */'../views/Client')
const ListClients = () => import (/* webpackChunkName: "client" */'../components/clients/ListClients')
const NewClient = () => import (/* webpackChunkName: "client" */'../components/clients/NewClient')

const routes = [
  {
    path: '/clientes',
    name: 'Client',
    component: Client
  },
  {
    path: '/clientes/listar',
    name: 'ListClients',
    component: ListClients
  },
  {
    name: 'cliente',
    path:'/clientes/:cliente',
    component:  NewClient
  }

];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router;