import Vue from 'vue'
import VueRouter from 'vue-router'

import CadastroUsuario from './../pages/CadastroUsuario'
import ListagemUsuarios from './../pages/ListaUsuarios'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: ListagemUsuarios
        },
        {
            path: '/cadastro',
            name: 'Cadastro',
            component: CadastroUsuario
        },
        {
            path: '/listagem',
            name: 'Listagem',
            component: ListagemUsuarios
        }
    ]
})

