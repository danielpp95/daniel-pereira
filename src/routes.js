import Home from '@/components/routes/Home.vue'
import Proyectos from '@/components/routes/Proyectos.vue'
import PageNotFound from '@/components/routes/404.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/projects', component: Proyectos, name: 'per' },
  { path: '*', component: PageNotFound, name: '404' }
]

export default routes
