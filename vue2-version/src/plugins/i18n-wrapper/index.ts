import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'
import { IAvailableLocaleInfo } from '@/models/localization/IAvailableLocaleInfo'

Vue.use(VueI18n)

export const availableLocales: IAvailableLocaleInfo[] = [{
  name: 'USA',
  locale: 'en-US',
  flag: 'us',
  selected: false
}, {
  name: 'Italy',
  locale: 'it-IT',
  flag: 'it',
  selected: false
}, {
  name: 'France',
  locale: 'fr-FR',
  flag: 'fr',
  selected: false
}, {
  name: 'Spain',
  locale: 'es-ES',
  flag: 'es',
  selected: false
}]

export const i18n = new VueI18n({
  locale: 'fr-FR',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': {
      welcome: 'Welcome: this message is localized for English'
    },
    'it-IT': {
      welcome: 'Benvenuti: this message is localized for Italian'
    },
    'fr-FR': {
      welcome: 'Bienvenue: this message is localized for French'
    },
    'es-ES': {
      welcome: 'Bienvenido: this message is localized for Spanish'
    }
  }
})
