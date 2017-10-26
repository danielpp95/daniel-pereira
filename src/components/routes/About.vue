<template lang="pug">
.container
  br
  .level
    .level-item 
      a(href="https://github.com/danielpp95/" target="_blank")
        i.fa.fa-github.fa-4x

    .level-item 
      a(href="https://www.linkedin.com/in/danielpp95" target="_blank")
        i.fa.fa-linkedin.fa-4x

    .level-item 
      a(href="mailto:hola@daniel-pereira.me")
        i.fa.fa-envelope.fa-4x
  br
  .columns(v-for="p in dpAbout" :key="p.id")
    vue-markdown.has-text-white.has-text-centered.is-size-4.column.is-8.is-offset-2 {{p.texto}}
    
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import dpAbout from '@/components/helpers/about.js'
  export default{
    data () {
      return ({
        dpAbout
      })
    },
    components: {
      VueMarkdown
    }
  }
</script>

<style scoped>
.level, h1, p{
  color: white;
}
</style>
