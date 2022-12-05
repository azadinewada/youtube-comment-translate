import GoogleWeb from './google/google-api'
import googleLanguage from './google/language'
import { Translate } from '../types'

const googleWeb = new GoogleWeb()

type ApiItem = {
  api: Translate
  language: any
}

type keys = 'google'
type Api = { [k in keys]: ApiItem }

const apis: Api = {
  google: {
    api: googleWeb,
    language: googleLanguage,
  },
}

export default apis
