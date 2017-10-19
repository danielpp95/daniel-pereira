<template lang="pug">
  .container
    .articulo( v-for="a in articulos" )
      br
      h1.title {{ a.titulo }}
      nav.level
        .level-item
          p.has-text-light
            Strong.has-text-light Plataforma: 
            | {{ a.plataforma }}
        .level-item
          p.has-text-light
            Strong.has-text-light Alcance: 
            | {{ a.alcance }}

        .level-item
          a.button.is-link.is-medium(:href="a.link") Link
      br
    
    




</template>

<script>
  import articulos from '@/components/helpers/articulos'
  export default {
    data () {
      return {
        articulos: articulos
      }
    }
  }
</script>

<style scoped>
.title, .subtitle {
  color: #fff;
}

.articulo {
  padding: 10px;
}
</style>
