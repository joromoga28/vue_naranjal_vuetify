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
            const peticion = await fetch('http://localhost:3000/usuario');
            const data = await peticion.json();
            console.log(data);
            commit('setUsuarios', data);
        },
        async cargarProyectos({ commit }) {
            // Get
            const peticion = await fetch('http://localhost:3000/proyecto/');
            const data = await peticion.json();
            console.log(data);
            commit('setProyectos', data);
        },
        async registrarUsuario({ commit }, objUsuario) {
            //POST
            const peticion = await fetch('http://localhost:3000/usuario', {
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
            const peticion = await fetch('http://localhost:3000/usuario', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
        },
        async eliminarProyecto({ commit }, obj) {
            const peticion = await fetch('http://localhost:3000/proyecto/', {
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