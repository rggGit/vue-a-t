<template lang="pug">
  main#app.app(
    :class="`app__theme--${theme}`")
    header
      h1#main-name {{ $t('app.name') }}
      p {{ $t('app.description') }}

    section(@click="colorTheme")
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
  data () {
    return {
      theme: store.getters.getTheme
    }
  },
  methods: {
    colorTheme () {
      store.commit('setDarkTheme')
      this.theme = store.getters.getTheme
    }
  }
}
</script>

<style lang="sass">
  @import '@/styles/app'
</style>
