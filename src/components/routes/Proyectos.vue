<template lang="pug">
  div
    //Selector
    nav.level

      p.level-item.has-text-centered
        button.button.is-dark( @click="selectType(true)" ) Personales

      p.level-item.has-text-centered
        button.button.is-dark( @click="selectType(false)" )  Empresariales


    // Personal View
    personales(v-show="is_personal" )
    // Empresarial View
    empresariales(v-show="!is_personal" )

</template>

<script>
import personales from '@/components/layout/Proyectos-personales'
import empresariales from '@/components/layout/Proyectos-empresariales'

export default {
  data () {
    return {
      is_personal: true
    }
  },
  components: { personales, empresariales },
  methods: {
    selectType (type) {
      this.is_personal = type
    }
  }
}
</script>

<style lang="sass" scoped>
.level
  margin-top: 15px;
</style>
