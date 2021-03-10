<template>
    <div class="listClient">
        
        <b-label v-if="!editarCliente" for="search" >Filtrar</b-label>
        <b-input v-if="!editarCliente" id="search" style="width:50%" v-model="search" />


        <NewClient v-if="editarCliente" :edit="editarCliente"/>
        <Table class="mt-3" 
        v-if="!loading_sources && !editarCliente" 
        :data="clientes" 
        :columns="table_columns" 
        :query="search"
        @update="edit" />
    </div>
</template>

<script>
import Table from '../ui/Table'
import axios from 'axios'
import NewClient from './NewClient'
import {baseApiUrl} from '../../utils/global'
export default {
    name:"ListClient",
    components: {Table,NewClient},
    data(){
        return{
            clientes:[],
            table_columns: [
                'Código', 'Nome', 'Sobrenome', 'Data Nascimento', 'Celular', 'Telefone', 'Email'
            ],
            search: '',
            loading_sources: true,
            editarCliente: ''
        }
    },
    methods:{
        async getClientes(){
            await axios.get(`${baseApiUrl}/clientes`)
            .then(res =>{
                this.clientes = res.data.map(cliente =>{
                    return ({
                        _id: cliente._id,
                        nome: cliente.nome, 
                        sobrenome: cliente.sobrenome,
                        dataNasc: cliente.data_nasc, 
                        celular: cliente.celular, 
                        telefone: cliente.telefone,
                        email: cliente.email, 
                    })
                })
                this.loading_sources = false
            }).catch(err=> console.log(err))
        },
        edit(data){
           this.editarCliente = data
        }
    },
    created(){
        this.getClientes()
    },
    watch:{
        'clientes': function(){
            this.getClientes()
        }
    }
}
</script>

<style scoped>

</style>