import Home from '@/components/routes/Home.vue'
import Proyectos from '@/components/routes/Proyectos.vue'

const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/projects', component: Proyectos, name: 'projects'}
]

export default routes
