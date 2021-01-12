const state = () => ({
    usuarios: []
})

const mutations = {
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
}

const getters = {
    todos: state => {
        return state.usuarios
    },
    pickOneUserById: (state) => (payload) => {
        return state.usuarios.find(item => item._id === payload._id)
    },
    existsUserByEmail: (state) => (payload) => {
        return !! state.usuarios.find(item => item.email === payload.email)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters
}