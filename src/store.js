import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarios: []
    },
    mutations: {
        incrementUser(state, payload) {
            state.usuarios.push(payload.user)
        },
        removeUser(state, payload){
            state.usuarios = state.usuarios.filter(item => item._id !== payload._id)
        }
    },
    getters: {
        todos: state => {
            return state.usuarios
        }
    }
})