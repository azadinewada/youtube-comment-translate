type langType =
  | 'fil-PH'
  | 'af-ZA'
  | 'az-Latn-AZ'
  | 'id-ID'
  | 'ms-MY'
  | 'bs-Latn-BA'
  | 'ca-ES'
  | 'cs-CZ'
  | 'da-DK'
  | 'de-DE'
  | 'et-EE'
  | 'en-IN'
  | 'en-GB'
  | 'en'
  | 'es-ES'
  | 'es-419'
  | 'es-US'
  | 'eu-ES'
  | 'fr-FR'
  | 'fr-CA'
  | 'gl-ES'
  | 'hr-HR'
  | 'zu-ZA'
  | 'is-IS'
  | 'it-IT'
  | 'sw-TZ'
  | 'lv-LV'
  | 'lt-LT'
  | 'hu-HU'
  | 'nl-NL'
  | 'nb-NO'
  | 'uz-Latn-UZ'
  | 'pl-PL'
  | 'pt-PT'
  | 'pt-BR'
  | 'ro-RO'
  | 'sq-AL'
  | 'sk-SK'
  | 'sl-SI'
  | 'sr-Latn-RS'
  | 'fi-FI'
  | 'sv-SE'
  | 'vi-VN'
  | 'tr-TR'
  | 'be-BY'
  | 'bg-BG'
  | 'ky-KG'
  | 'kk-KZ'
  | 'mk-MK'
  | 'mn-MN'
  | 'ru-RU'
  | 'sr-Cyrl-RS'
  | 'uk-UA'
  | 'el-GR'
  | 'hy-AM'
  | 'he-IL'
  | 'ur-PK'
  | 'ar'
  | 'fa-IR'
  | 'ne-NP'
  | 'mr-IN'
  | 'hi-IN'
  | 'as-IN'
  | 'bn-BD'
  | 'pa-Guru-IN'
  | 'gu-IN'
  | 'or-IN'
  | 'ta-IN'
  | 'te-IN'
  | 'kn-IN'
  | 'ml-IN'
  | 'si-LK'
  | 'th-TH'
  | 'lo-LA'
  | 'my-MM'
  | 'ka-GE'
  | 'am-ET'
  | 'km-KH'
  | 'zh-Hans-CN'
  | 'zh-Hant-TW'
  | 'zh-Hant-HK'
  | 'ja-JP'
  | 'ko-KR'

type Item = {
  name: string
  description: string
}

type Laguages = {
  [k in langType]: Item
}

export const langs: Laguages = {
  'fil-PH': { name: 'Filipino', description: '菲律宾语' },
  'af-ZA': { name: 'Afrikaans', description: '南非荷兰语' },
  'az-Latn-AZ': { name: 'Azərbaycan', description: '阿塞拜疆语' },
  'id-ID': { name: 'Bahasa Indonesia', description: '印尼语' },
  'ms-MY': { name: 'Bahasa Malaysia', description: '马来语' },
  'bs-Latn-BA': { name: 'Bosanski', description: '波斯尼亚语' },
  'ca-ES': { name: 'Català', description: '加泰罗尼亚语' },
  'cs-CZ': { name: 'Čeština', description: '捷克语' },
  'da-DK': { name: 'Dansk', description: '丹麦语' },
  'de-DE': { name: 'Deutsch', description: '德语' },
  'et-EE': { name: 'Eesti', description: '爱沙尼亚语' },
  'en-IN': { name: 'English (India)', description: '英语' },
  'en-GB': { name: 'English (UK)', description: '英语' },
  en: { name: 'English (US)', description: '英语' },
  'es-ES': { name: 'Español (España)', description: '西班牙语' },
  'es-419': { name: 'Español (Latinoamérica)', description: '西班牙语' },
  'es-US': { name: 'Español (US)', description: '西班牙语' },
  'eu-ES': { name: 'Euskara', description: '巴斯克语' },
  'fr-FR': { name: 'Français', description: '法语' },
  'fr-CA': { name: 'Français (Canada)', description: '法语' },
  'gl-ES': { name: 'Galego', description: '加利西亚语' },
  'hr-HR': { name: 'Hrvatski', description: '克罗地亚语' },
  'zu-ZA': { name: 'IsiZulu', description: '南非祖鲁语' },
  'is-IS': { name: 'Íslenska', description: '冰岛语' },
  'it-IT': { name: 'Italiano', description: '意大利语' },
  'sw-TZ': { name: 'Kiswahili', description: '斯瓦希里语' },
  'lv-LV': { name: 'Latviešu valoda', description: '拉脱维亚语' },
  'lt-LT': { name: 'Lietuvių', description: '立陶宛语' },
  'hu-HU': { name: 'Magyar', description: '匈牙利语' },
  'nl-NL': { name: 'Nederlands', description: '荷兰语' },
  'nb-NO': { name: 'Norsk', description: '挪威语' },
  'uz-Latn-UZ': { name: 'O‘zbek', description: '乌兹别克语' },
  'pl-PL': { name: 'Polski', description: '波兰语' },
  'pt-PT': { name: 'Português', description: '葡萄牙语' },
  'pt-BR': { name: 'Português (Brasil)', description: '葡萄牙语' },
  'ro-RO': { name: 'Română', description: '罗马尼亚语' },
  'sq-AL': { name: 'Shqip', description: '阿尔巴尼亚语' },
  'sk-SK': { name: 'Slovenčina', description: '斯洛伐克语' },
  'sl-SI': { name: 'Slovenščina', description: '斯洛文尼亚语' },
  'sr-Latn-RS': { name: 'Srpski', description: '塞尔维亚语' },
  'fi-FI': { name: 'Suomi', description: '芬兰语' },
  'sv-SE': { name: 'Svenska', description: '瑞典语' },
  'vi-VN': { name: 'Tiếng Việt', description: '越南语' },
  'tr-TR': { name: 'Türkçe', description: '土耳其语' },
  'be-BY': { name: 'Беларуская', description: '白俄罗斯语' },
  'bg-BG': { name: 'Български', description: '保加利亚语' },
  'ky-KG': { name: 'Кыргызча', description: '吉尔吉斯语' },
  'kk-KZ': { name: 'Қазақ Тілі', description: '哈萨克语' },
  'mk-MK': { name: 'Македонски', description: '马其顿语' },
  'mn-MN': { name: 'Монгол', description: '蒙古语' },
  'ru-RU': { name: 'Русский', description: '俄语' },
  'sr-Cyrl-RS': { name: 'Српски', description: '塞尔维亚语' },
  'uk-UA': { name: 'Українська', description: '乌克兰语' },
  'el-GR': { name: 'Ελληνικά', description: '希腊语' },
  'hy-AM': { name: 'Հայերեն', description: '亚美尼亚语' },
  'he-IL': { name: 'עברית', description: '希伯来语' },
  'ur-PK': { name: 'اردو', description: '乌尔都语' },
  ar: { name: 'العربية', description: '阿拉伯语' },
  'fa-IR': { name: 'فارسی', description: '波斯语' },
  'ne-NP': { name: 'नेपाली', description: '尼泊尔语' },
  'mr-IN': { name: 'मराठी', description: '马拉地语' },
  'hi-IN': { name: 'हिन्दी', description: '印地语' },
  'as-IN': { name: 'অসমীয়া', description: '阿萨姆语' },
  'bn-BD': { name: 'বাংলা', description: '孟加拉语' },
  'pa-Guru-IN': { name: 'ਪੰਜਾਬੀ', description: '旁遮普语' },
  'gu-IN': { name: 'ગુજરાતી', description: '古吉拉特语' },
  'or-IN': { name: 'ଓଡ଼ିଆ', description: '奥利亚语' },
  'ta-IN': { name: 'தமிழ்', description: '泰米尔语' },
  'te-IN': { name: 'తెలుగు', description: '泰卢固语' },
  'kn-IN': { name: 'ಕನ್ನಡ', description: '卡纳达语' },
  'ml-IN': { name: 'മലയാളം', description: '马拉雅拉姆语' },
  'si-LK': { name: 'සිංහල', description: '僧伽罗语' },
  'th-TH': { name: 'ภาษาไทย', description: '泰语' },
  'lo-LA': { name: 'ລາວ', description: '老挝语' },
  'my-MM': { name: 'ဗမာ', description: '缅甸语' },
  'ka-GE': { name: 'ქართული', description: '格鲁吉亚语' },
  'am-ET': { name: 'አማርኛ', description: '阿姆哈拉语' },
  'km-KH': { name: 'ខ្មែរ', description: '高棉语' },
  'zh-Hans-CN': { name: '中文 (简体)', description: '中文 (简体)' },
  'zh-Hant-TW': { name: '中文 (繁體)', description: '中文 (繁體)' },
  'zh-Hant-HK': { name: '中文 (香港)', description: '中文 (香港)' },
  'ja-JP': { name: '日本語', description: '日语' },
  'ko-KR': { name: '한국어', description: '韩语' }
}

// export const names = [
//   'Afrikaans',
//   'Azərbaycan',
//   'Bahasa Indonesia',
//   'Bahasa Malaysia',
//   'Bosanski',
//   'Català',
//   'Čeština',
//   'Dansk',
//   'Deutsch',
//   'Eesti',
//   'English (India)',
//   'English (UK)',
//   'English (US)',
//   'Español (España)',
//   'Español (Latinoamérica)',
//   'Español (US)',
//   'Euskara',
//   'Filipino',
//   'Français',
//   'Français (Canada)',
//   'Galego',
//   'Hrvatski',
//   'IsiZulu',
//   'Íslenska',
//   'Italiano',
//   'Kiswahili',
//   'Latviešu valoda',
//   'Lietuvių',
//   'Magyar',
//   'Nederlands',
//   'Norsk',
//   'O‘zbek',
//   'Polski',
//   'Português',
//   'Português (Brasil)',
//   'Română',
//   'Shqip',
//   'Slovenčina',
//   'Slovenščina',
//   'Srpski',
//   'Suomi',
//   'Svenska',
//   'Tiếng Việt',
//   'Türkçe',
//   'Беларуская',
//   'Български',
//   'Кыргызча',
//   'Қазақ Тілі',
//   'Македонски',
//   'Монгол',
//   'Русский',
//   'Српски',
//   'Українська',
//   'Ελληνικά',
//   'Հայերեն',
//   'עברית',
//   'اردو',
//   'العربية',
//   'فارسی',
//   'नेपाली',
//   'मराठी',
//   'हिन्दी',
//   'অসমীয়া',
//   'বাংলা',
//   'ਪੰਜਾਬੀ',
//   'ગુજરાતી',
//   'ଓଡ଼ିଆ',
//   'தமிழ்',
//   'తెలుగు',
//   'ಕನ್ನಡ',
//   'മലയാളം',
//   'සිංහල',
//   'ภาษาไทย',
//   'ລາວ',
//   'ဗမာ',
//   'ქართული',
//   'አማርኛ',
//   'ខ្មែរ',
//   '中文 (简体)',
//   '中文 (繁體)',
//   '中文 (香港)',
//   '日本語',
//   '한국어',
// ]

// export const langs = [
//   'af-ZA',
//   'az-Latn-AZ',
//   'id-ID',
//   'ms-MY',
//   'bs-Latn-BA',
//   'ca-ES',
//   'cs-CZ',
//   'da-DK',
//   'de-DE',
//   'et-EE',
//   'en-IN',
//   'en-GB',
//   'en',
//   'es-ES',
//   'es-419',
//   'es-US',
//   'eu-ES',
//   'fil-PH',
//   'fr-FR',
//   'fr-CA',
//   'gl-ES',
//   'hr-HR',
//   'zu-ZA',
//   'is-IS',
//   'it-IT',
//   'sw-TZ',
//   'lv-LV',
//   'lt-LT',
//   'hu-HU',
//   'nl-NL',
//   'nb-NO',
//   'uz-Latn-UZ',
//   'pl-PL',
//   'pt-PT',
//   'pt-BR',
//   'ro-RO',
//   'sq-AL',
//   'sk-SK',
//   'sl-SI',
//   'sr-Latn-RS',
//   'fi-FI',
//   'sv-SE',
//   'vi-VN',
//   'tr-TR',
//   'be-BY',
//   'bg-BG',
//   'ky-KG',
//   'kk-KZ',
//   'mk-MK',
//   'mn-MN',
//   'ru-RU',
//   'sr-Cyrl-RS',
//   'uk-UA',
//   'el-GR',
//   'hy-AM',
//   'he-IL',
//   'ur-PK',
//   'ar',
//   'fa-IR',
//   'ne-NP',
//   'mr-IN',
//   'hi-IN',
//   'as-IN',
//   'bn-BD',
//   'pa-Guru-IN',
//   'gu-IN',
//   'or-IN',
//   'ta-IN',
//   'te-IN',
//   'kn-IN',
//   'ml-IN',
//   'si-LK',
//   'th-TH',
//   'lo-LA',
//   'my-MM',
//   'ka-GE',
//   'am-ET',
//   'km-KH',
//   'zh-Hans-CN',
//   'zh-Hant-TW',
//   'zh-Hant-HK',
//   'ja-JP',
//   'ko-KR',
// ]



// const gen = () => {
//   const objs: any = {}
//   for (let i = 0; i < langs.length; i++) {
//     let obj = { name: names[i], description: '' }
//     objs[langs[i]] = obj 
//   }
//   return objs
// }
// console.log(gen())

// console.log(Object.keys(langs).length)