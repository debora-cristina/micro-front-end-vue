<template>
    <div id="cliente">
        <b-container fluid>  
        <b-form @submit="onSubmit" @reset="onReset" > 

            <b-row class="my-1">
                <b-col sm="2">
                <label for="nome">Nome</label>
                </b-col>
                <b-col sm="10">
                <b-form-input id="nome" type="text" v-model="cliente.nome"></b-form-input>
                </b-col>
            </b-row> 

            <b-row class="my-2">
                <b-col sm="2">
                <label for="sobrenome">Sobrenome</label>
                </b-col>
                <b-col sm="10">
                <b-form-input id="sobrenome" type="text" v-model="cliente.sobrenome"></b-form-input>
                </b-col>
            </b-row> 

             <b-row class="my-3">
                <b-col sm="2">
                <label for="date">Data de Nascimento</label>
                </b-col>
                <b-col sm="10">
                <b-form-input id="date" type="date" v-model="cliente.data_nasc"></b-form-input>
                </b-col>
            </b-row> 

             <b-row class="my-4">
                <b-col sm="2">
                <label for="celular">Celular</label>
                </b-col>
                <b-col sm="10">
                <b-form-input id="celular" type="tel" v-model="cliente.celular"></b-form-input>
                </b-col>
            </b-row> 

             <b-row class="my-5">
                <b-col sm="2">
                <label for="telefone">Telefone</label>
                </b-col>
                <b-col sm="10">
                <b-form-input id="telefone" type="tel" v-model="cliente.telefone"></b-form-input>
                </b-col>
            </b-row> 

             <b-row class="my-6">
                <b-col sm="2">
                <label for="email">E-mail</label>
                </b-col>
                <b-col sm="10">
                <b-form-input id="email" type="email" v-model="cliente.email"></b-form-input>
                </b-col>
            </b-row> 

            <b-button class="mt-3" v-if="!isEdit" type="submit" variant="primary">Cadastrar</b-button>
            <b-button class="mt-3" v-if="!isEdit" type="reset" variant="danger">Limpar</b-button>
            <b-button class="mt-3" v-if="isEdit" type="submit" variant="primary" @click="alterar">Alterar</b-button>
            <b-button class="mt-3" v-if="isEdit" type="submit" variant="danger" @click="deletar">Deletar</b-button>

        </b-form>

        </b-container>
    </div>
</template>

<script>
import {baseApiUrl} from '../../utils/global'
import axios from 'axios'
export default {
    name: "NovoCliente",
    props: ['edit'],
    data(){
        return{
            cliente: {},
            isEdit : false
        }
    },
    methods:{
        onSubmit(){
            axios.post(`${baseApiUrl}/clientes`, this.cliente)
            .then(res =>{
                this.$toasted.global.defaultSuccess()
            }).catch(err => console.log(err))
        },
        onReset(){
            this.cliente = {}
        },
        alterar(){
            console.log(this.cliente)
            axios.put(`${baseApiUrl}/clientes/${this.cliente._id}`, this.cliente)
            .then(res =>{
                this.$toasted.global.defaultSuccess()
            }).catch(err => console.log(err))
        },
        deletar(){
            axios.delete(`${baseApiUrl}/clientes/${this.cliente._id}`)
            .then(res =>{
                this.$toasted.global.defaultSuccess()
            }).catch(err => console.log(err))
        },
    },
    created(){
           if(this.edit){
            this.cliente = this.edit
            this.isEdit = true
           }
    }
}
</script>

<style scoped>

</style>