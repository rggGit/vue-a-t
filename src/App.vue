<template lang="pug">
  main#app
    header
      h1#main-name VueJS A-T
      p VueJS Accessibility Training

    section
      h2 Section

      router-view

</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="sass">
  @import '@/styles/app'
</style>
