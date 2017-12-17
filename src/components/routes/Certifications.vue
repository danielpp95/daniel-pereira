<template lang="pug">
  .has-text-centered
    br
    h1.title Titulos y certicicaciones

    div.certificado(v-for="c in certificados")
      img.is-128x128(:src="c.img")
      p {{c.nombre}}
      br
    br
    br
    br
</template>

<script>
import certificaciones from '@/components/helpers/certificados'
console.log(certificaciones)
export default{
  data () {
    return {
      certificados: certificaciones
    }
  }
}
</script>

<style>
.title, p{
  color: white;
}
.certificado{
  width: 25%;
  height: 200px;
  display: inline-block;
  margin: 0.5em;
  vertical-align: top;
}


</style>

