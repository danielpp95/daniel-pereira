<template lang="pug">
.column.is-10.is-offset-1
  .box
    article.media
      .media-left
        figure.image.is-128x128
           img(:src="img", alt='Image')
      .media-content
        .content
          .columns
            .column
              p
                strong {{title}}
                br
              p  
                Strong Tools: 
                a(v-for="t in tools" :href="t.url") {{t.tool}} 
              p
                strong Status: 
                span.has-text-success {{status}}
            .column
              br
              br
              a
                img.image.is-64x64(:src="imgGit")
              router-link.button.is-link.is-medium.is-pulled-right(to="pokedex") Demo Page

  nav.level
    .level-item.has-text-centered
      div
        p.heading Y mas proximamente
        p.title Uploading...
</template>

<script>

export default{
  data () {
    return {
      img: require('@/assets/pokedex.png'),
      title: 'PokeApi',
      tools: [
        {
          tool: 'pokeapi',
          url: `https://pokeapi.co/`
        }
      ],
      status: 'Active',
      imgGit: require('@/assets/certificados/github.png')
    }
  }
}
</script>

<style>
p, p.title{
  color: white;
}
</style>
