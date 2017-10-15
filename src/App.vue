<template lang="pug">
  #app
    dp-header
    router-view 
</template>

<script>
import dpHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {dpHeader},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
 @import './scss/main.scss';

html{
  background-color: rgb(47,48, 47)
}
</style>
