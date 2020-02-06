<template lang="pug">
  main#app
    header
      h1#main-name {{ $t('app.name') }}
      p {{ $t('app.description') }}

    section
      h2 {{ $t(`app.sections.${$route.name}.title`) }}

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
