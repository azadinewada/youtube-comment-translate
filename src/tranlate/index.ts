import { googleWeb } from './google/api'
import { getGoogleLanguageSupport } from './google/language'
import { Translate } from '../types'

type LanguageFunction = (lang: string) => string;

type ApiItem = {
  api: Translate
  language: LanguageFunction
}

type keys = 'google' // 定义所有Api的类型
type Apis = { [k in keys]: ApiItem }

const apis: Apis = {
  google: {
    api: googleWeb,
    language: getGoogleLanguageSupport,
  },
}

export default apis
