import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ConsultaProyectos from '../views/ConsultaProyectos.vue'
import EstadosProyectos from '../views/EstadosProyectos.vue'
import Login from '../views/Login.vue'
import RegistroProyectos from '../views/RegistroProyectos.vue'
import RegistroUsuarios from '../views/RegistroUsuarios.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/consultaproyectos',
        name: 'ConsultaProyectos',
        component: ConsultaProyectos
    },
    {
        path: '/estadosproyectos',
        name: 'EstadosProyectos',
        component: EstadosProyectos
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
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router