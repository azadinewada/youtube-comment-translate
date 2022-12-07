import { TranslateOptions, TranslateResult, Translate, TranslateParams } from '../../types'

interface RawResult {
  src: string // 被查询的字符串的语种
  sentences: {
    orig: string // 被查询的字符串
    trans: string // 一般翻译结果
  }[] // 数组的最后一项是翻译结果的音标（例如如果翻译到中文那么就是拼音）

  dict?: {
    // 单词详细释义
    pos: string // 词性，例如名词、动词等
    terms: string[] // 此词性下的单词释义
    entry: object[] // 对每个词的详解
  }[]
}

class GoogleWeb implements Translate {
  name: string
  constructor() {
    this.name = 'GoogleWeb'
  }
  async translate(params: TranslateParams) {
    const { text, from = 'auto', to = 'zh-CN' } = params
    const searchParams = new URLSearchParams()
    searchParams.append('client', 'gtx')
    searchParams.append('sl', from)
    searchParams.append('tl', to)
    searchParams.append('dj', '1')
    searchParams.append('dt', 't')
    searchParams.append('dt', 'rm')
    searchParams.append('q', text)
    const url = 'https://translate.googleapis.com/translate_a/single?' + searchParams
    return fetch(url).then((data: any) => data.json())
  }
  transform(query: TranslateOptions, result: RawResult) {
    const { text, to } = query
    const { src } = result
    const realFrom = result.src || query.from!
    const r: TranslateResult = {
      text: text,
      raw: result,
      link: `https://translate.google.com/?sl=${src || 'auto'}&tl=${to}&text=${encodeURIComponent(
        text
      )}&op=translate`,
      from: realFrom,
      to: to!,
    }
    try {
      r.result = result.sentences
        .map(s => ('trans' in s ? s.trans : ''))
        .join('')
        .split('\n')
    } catch (e) {
      console.error(e)
    }
    return r
  }
}

export const googleWeb = new GoogleWeb()
