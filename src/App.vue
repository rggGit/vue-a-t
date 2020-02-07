<template lang="pug">
  main#app.app(
    :class="`app__theme--${theme}`")
    header
      h1#main-name {{ $t('app.name') }}
      p {{ $t('app.description') }}

    section
      h2 {{ $t(`app.sections.${$route.name}.title`) }}

      router-view

    icon-symbols.hide

</template>

<script>
import store from '@/vuex/store'
import IconSymbols from '@/assets/icon-symbols.vue'

export default {
  name: 'app',
  components: {
    IconSymbols
  },
  computed: {
    theme () {
      return store.getters.getTheme
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="sass">
  @import '@/styles/app'
</style>
