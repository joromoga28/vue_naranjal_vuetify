import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuario: [],
        proyecto: []
    },
    mutations: {
        setUsuarios(state, payload) {
            state.usuario = payload;
        },
        setProyectos(state, payload) {
            state.proyecto = payload;
        }

    },
    actions: {
        async cargarUsuarios({ commit }) {
            // Get
            const peticion = await fetch('https://naranjal-backend.herokuapp.com/usuario');
            const data = await peticion.json();
            console.log(data);
            commit('setUsuarios', data);
        },
        async cargarProyectos({ commit }) {
            // Get
            const peticion = await fetch('https://naranjal-backend.herokuapp.com/proyecto/');
            const data = await peticion.json();
            console.log(data);
            commit('setProyectos', data);
        },
        async registrarUsuario({ commit }, objUsuario) {
            //POST
            const peticion = await fetch('https://naranjal-backend.herokuapp.com/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objUsuario)
            });
            const data = await peticion.json();
            console.log(data);
        },
        async eliminarUsuario({ commit }, obj) {
            const peticion = await fetch('https://naranjal-backend.herokuapp.com/usuario', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
        },
        async eliminarProyecto({ commit }, obj) {
            const peticion = await fetch('https://naranjal-backend.herokuapp.com/proyecto/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
        },
    },
    modules: {}
})