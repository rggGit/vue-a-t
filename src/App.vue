<template lang="pug">
  main#app
    header
      h1#main-name {{ $t('app.name') }}
      p {{ $t('app.description') }}

    section
      h2 {{ $t(`app.sections.${$route.name}.title`) }}

      router-view

    icon-symbols.hide

</template>

<script>
import IconSymbols from '@/assets/icon-symbols.vue'

export default {
  name: 'app',
  components: {
    IconSymbols
  },
  data () {
    return {}
  }
}
</script>

<style lang="sass">
  @import '@/styles/app'
</style>
