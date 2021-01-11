import VueRouter from 'vue-router'

import CadastroUsuario from './../pages/CadastroUsuario/CadastroUsuario'
import ListagemUsuarios from './../pages/ListaUsuarios/ListaUsuarios'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Listagem',
            component: ListagemUsuarios
        },
        {
            path: '/cadastro',
            name: 'Cadastro',
            component: CadastroUsuario
        },
    ]
})