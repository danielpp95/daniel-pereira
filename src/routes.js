import Home from '@/components/routes/Home.vue'
import Proyectos from '@/components/routes/Proyectos.vue'
import PageNotFound from '@/components/routes/404.vue'
import Pokedex from '@/components/routes/Pokedex'
import Certifications from '@/components/routes/Certifications'
import About from '@/components/routes/About'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/projects', component: Proyectos, name: 'per' },
  { path: '/pokedex', component: Pokedex, name: 'pokedex' },
  { path: '/certifications', component: Certifications, name: 'certifications' },
  { path: '/about', component: About, name: 'about' },
  { path: '*', component: PageNotFound, name: '404' }
]

export default routes
