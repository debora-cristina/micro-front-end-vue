<template>
  <div id="client">
    <Tabs :tabs="tabs"/>
  </div>
</template>

<script>
import Tabs from '../components/ui/Tabs'
import NewClient from '../components/clients/NewClient'
import ListClient from '../components/clients/ListClients'
export default {
    components:{NewClient, Tabs,ListClient},
    data(){
      return{
        tabs: [
          {
            id: "1",
            name: "Cadastrar Novo Cliente",
            component: NewClient
          },
          {
            id:"2",
            name: "Listar Clientes",
            component: ListClient
          }
        ]
      }
    }
}
</script>