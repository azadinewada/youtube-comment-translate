import { googleWeb } from './google/api'
import { googleLanguage } from './google/language'
import { Translate } from '../types'

type ApiItem = {
  api: Translate
  language: any
}

type keys = 'google' // 定义所有Api的类型
type Apis = { [k in keys]: ApiItem }

const apis: Apis = {
  google: {
    api: googleWeb,
    language: googleLanguage,
  },
}

export default apis
