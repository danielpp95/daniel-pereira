<template lang="pug">
  #app
    dp-header
    
    router-view 

    dp-footer
</template>

<script>
import dpHeader from '@/components/layout/Header'
import dpFooter from '@/components/layout/Footer'

export default {
  name: 'app',
  components: { dpHeader, dpFooter }
}
</script>

<style lang="scss">
  @import './scss/main.scss'; //
</style>
