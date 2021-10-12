import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import RegistroProyectos from '../views/RegistroProyectos.vue'
import RegistroUsuarios from '../views/RegistroUsuarios.vue'
import UsuariosListado from '../views/UsuariosListado.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/registroproyectos',
        name: 'RegistroProyectos',
        component: RegistroProyectos
    },
    {
        path: '/registrousuarios',
        name: 'RegistroUsuarios',
        component: RegistroUsuarios
    },
    {
        path: '/usuarioslistado',
        name: 'UsuariosListado',
        component: UsuariosListado
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router