import Home from '@/components/routes/Home.vue'
import ProyectosPer from '@/components/routes/Proyectos-per.vue'
import PageNotFound from '@/components/routes/404.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/projects', component: ProyectosPer, name: 'per' },
  { path: '*', component: PageNotFound, name: '404' }
]

export default routes
