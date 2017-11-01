const articulos = [
  {
    img: require('@/assets/pokedex.png'),
    title: 'PokeApi',
    status: 'Active',
    git: '',
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
    demo: '/ruta-platzi',
    tools: [
      { tool: 'webpack-simple', url: `https://github.com/danielpp95/webpack-simple` }
    ],
    id: 3
  }
]

export default articulos
