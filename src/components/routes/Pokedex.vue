<template lang="pug">
div.contenedor

  h1.title The Pokemon company

  .columns
    .column
      p Desde
      input.input(type="number" placeholder="Desde" v-model="desde")

    .column
      p Hasta
      input.input(type="number" placeholder="Hasta" v-model="hasta")
  
  button.button( @click="pokemonFetch" ) Buscar Pokemon! <span class="ec ec-space-invader"></span>

  ul#lista-pokemon
    li.pokemon(v-for="pokemon in sortedArray" :key="pokemon.id")
      img(:src="pokemon.img")
      p {{pokemon.name}}
      p {{pokemon.id}}
  br

</template>


<script>
import trae from 'trae'
// import vibrant from 'node-vibrant'

export default{
  data () {
    return {
      desde: 1,
      hasta: 9,
      listaPokemon: []
    }
  },
  computed: {
    reversedMessage () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
    sortedArray () {
      return this.listaPokemon.sort(function (a, b) {
        if (a.id > b.id) {
          return 1
        }
        if (a.id < b.id) {
          return -1
        }
        return 0
      })
    }
  },
  methods: {
    pokemonFetch () {
      this.listaPokemon = []
      for (let i = this.desde; i <= this.hasta; i++) {
        const api = `https://pokeapi.co/api/v2/pokemon/${i}/`
        trae.get(api, { bodyType: 'json' }).then((response) => {
          const pokemon = response.data
          this.listaPokemon.push({name: pokemon.name, id: pokemon.id, img: pokemon.sprites.front_default})
        })
      }
    }
  }
}
</script>

<style scoped>
.contenedor{
  padding: 10px;
  background-color: white;
}

#lista-pokemon{
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
}

h1, p{
  color: black;
}

li{
  width: 20%;
}
img{
  width: 100%
}

.pokemon {
  padding: 10px;
  width: 33%;
  box-sizing: border-box;
  list-style: none;
  text-align: center;
  /* height: 500px; */
  animation: .3s pokemon;
}

.ec {
  margin-left: 5px;
}

@keyframes pokemon {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
