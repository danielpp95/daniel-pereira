<template lang="pug">
.column.is-10.is-offset-1
  .box(v-for="p in proyectos")
    article.media
      .media-left
        figure.image.is-128x128
           img(:src="p.img", alt='Image')
      .media-content
        .content
          .columns
            .column
              p
                strong {{p.title}}
                br
              p  
                Strong Tools: 
                a(v-for="t in p.tools" :href="t.url") {{t.tool}} 
              p
                strong Status: 
                span.has-text-success {{p.status}}
            .column
              br
              br
              router-link.button.is-link.is-medium.is-pulled-right(:to="p.demo" v-if="p.demo") Demo Page
              a.is-pulled-right
                img.image.is-48x48.git(:src="git_img")

  nav.level
    .level-item.has-text-centered
      div
        p.heading Y mas proximamente
        p.title Uploading...
</template>

<script>
import proyectos from '@/components/helpers/proyectos'

export default{
  data () {
    return {
      proyectos,
      git_img: require('@/assets/certificados/github.png')
    }
  }
}
</script>

<style>
p, p.title{
  color: white;
}
.git{
  margin-right: 10px;
}
</style>
