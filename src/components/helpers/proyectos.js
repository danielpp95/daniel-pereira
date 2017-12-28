const articulos = [
  {
    img: require('@/assets/pokedex.png'),
    title: 'PokeApi',
    status: 'Active',
    git: '',
    onSite: true,
    demo: 'pokedex',
    tools: [
      { tool: 'pokeapi', url: `https://pokeapi.co/` }
    ],
    id: 1
  },
  {
    img: require('@/assets/vue-logo.png'),
    title: 'webpack-simple',
    status: 'Active',
    git: 'https://github.com/danielpp95/webpack-simple',
    onSite: true,
    demo: '',
    tools: [
      { tool: 'webpack-simple', url: `https://github.com/vuejs-templates/webpack-simple` }
    ],
    id: 2
  },
  {
    img: require('@/assets/www.png'),
    title: 'daniel-pereira.me',
    status: 'Active',
    git: 'https://github.com/danielpp95/daniel-pereira.me',
    onSite: true,
    demo: '/',
    tools: [
      { tool: 'webpack-simple', url: `https://github.com/danielpp95/webpack-simple` },
      { tool: 'Gitgub Pages', url: `https://pages.github.com/` },
      { tool: 'Bulma.io', url: `https://bulma.io/` }
    ],
    id: 3
  },
  {
    img: require('@/assets/ruta-platzi.png'),
    title: 'Ruta de aprendizaje en Platzi',
    status: 'Active',
    git: 'https://github.com/danielpp95/ruta-platzi',
    onSite: true,
    demo: '/ruta-platzi',
    tools: [
      { tool: 'webpack-simple', url: `https://github.com/danielpp95/webpack-simple` }
    ],
    id: 4
  },
  {
    img: 'https://raw.githubusercontent.com/danielpp95/platzi-video/master/images/logo.png',
    title: 'Ruta de aprendizaje en Platzi',
    status: 'Active',
    git: 'https://github.com/danielpp95/platzi-video',
    onSite: false,
    demo: 'https://danielpp95.github.io/platzi-video/',
    tools: [
      { tool: 'React', url: `https://reactjs.org` }
    ],
    id: 5
  }
]

export default articulos
