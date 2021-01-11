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
        removeUser(state, payload) {
            state.usuarios = state.usuarios.filter(item => item._id !== payload._id)
        },
        editUser(state, payload) {
            state.usuarios = state.usuarios.map(item => {
                if (item._id === payload.user._id) {
                    item = Object.assign(item, payload.user)
                }
                return item
            })
        }
    },
    getters: {
        todos: state => {
            return state.usuarios
        },
        pickOneUserById: (state) => (payload) => {
            return state.usuarios.find(item => item._id === payload._id)
        },
    }
})