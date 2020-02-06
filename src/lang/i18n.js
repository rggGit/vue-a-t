import Vue from 'vue'
import esES from './esES.json'
import enEN from './enEN.json'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en-GB',
  fallbackLocale: 'en-GB',
  messages: {
    'en-GB': enEN,
    'es-ES': esES
  }
});