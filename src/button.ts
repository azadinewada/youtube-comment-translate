import apis from './tranlate'
import { getGoogleLanguageSupport } from './tranlate/google/language'

let btnTranslateName = '翻译'
let btnOriginalName = '原文'

type btnNames = [btnTranslateName: string, btnOriginalName: string]

const btnNameMap: { [lang: string]: btnNames } = JSON.parse(
  '{"sq":["përkthejnë","origjinale"],"ar":["يترجم","أصلي"],"am":["መተርጎም","ኦሪጅናል"],"as":["অনুবাদ কৰা","মূল"],"az":["tərcümə etmək","orijinal"],"ee":["ɖe gbe gɔme","gbãtɔ"],"ay":["jaqukipaña","urijinala"],"ga":["aistrigh","bunaidh"],"et":["tõlkida","originaal"],"or":["ଅନୁବାଦ କର","ମୂଳ"],"om":["hiikuu","kan jalqabaa"],"eu":["itzuli","jatorrizkoa"],"be":["перакладаць","арыгінальны"],"bm":["ka bayɛlɛma","yɛrɛyɛrɛ"],"bg":["превеждам","оригинален"],"is":["þýða","frumlegt"],"pl":["Tłumaczyć","oryginał"],"bs":["prevesti","original"],"fa":["ترجمه کردن","اصلی"],"bho":["अनुवाद","असली"],"af":["vertaal","oorspronklike"],"tt":["тәрҗемә итү","оригиналь"],"da":["Oversætte","original"],"de":["Übersetzen","Original"],"dv":["ތަރުޖަމާކުރުން","އަސްލު"],"ti":["ምትርጓም","ኦርጂናል"],"doi":["अनुवाद करना","मूल"],"ru":["перевести","оригинальный"],"fr":["Traduire","original"],"sa":["अनुवदति","मूल"],"tl":["Isalin","orihinal"],"fil":["Isalin","orihinal"],"fi":["Kääntää","alkuperäinen"],"fy":["oersette","oarspronklik"],"km":["បកប្រែ","ដើម"],"ka":["თარგმნა","ორიგინალური"],"gom":["अणकार करचो","मूळ"],"gu":["અનુવાદ","મૂળ"],"gn":["ñe\'ẽmbohasa","ypykue"],"kk":["аудару","түпнұсқа"],"ht":["tradwi","orijinal"],"ko":["번역하다","원래의"],"ha":["fassara","asali"],"nl":["vertalen","origineel"],"ky":["которуу","оригиналдуу"],"gl":["traducir","orixinal"],"ca":["traduir","original"],"cs":["přeložit","originál"],"kn":["ಅನುವಾದಿಸು","ಮೂಲ"],"co":["traduce","uriginale"],"kri":["translet","fɔstɛm"],"hr":["Prevedi","izvornik"],"qu":["tikray","kikin"],"ku":["wergerandin","eslî"],"ckb":["وەرگێڕان","ڕەسەن"],"la":["translate","original"],"lv":["tulkot","oriģināls"],"lo":["ແປ","ຕົ້ນສະບັບ"],"lt":["išversti","originalus"],"ln":["kobongola","esika euti"],"lg":["okuvvunula","-yiiye"],"lb":["iwwersetzen","original"],"rw":["guhindura","umwimerere"],"ro":["Traduceți","original"],"mg":["translate","tamin\'ny fototra"],"mt":["tittraduċi","oriġinali"],"mr":["भाषांतर करा","मूळ"],"ml":["വിവർത്തനം ചെയ്യുക","ഒറിജിനൽ"],"ms":["menterjemah","asal"],"mk":["преведи","оригинален"],"mai":["भाषांतर केनाइ","मूल"],"mi":["whakamaori","taketake"],"mn":["орчуулах","эх"],"bn":["অনুবাদ করা","মূল"],"lus":["letling","dik tak"],"my":["ဘာသာပြန်ပါ။","မူရင်း"],"hmn":["txhais","qub"],"xh":["guqulela","yoqobo"],"zu":["humusha","okwangempela"],"ne":["अनुवाद गर्नुहोस्","मौलिक"],"no":["oversette","opprinnelig"],"pa":["ਅਨੁਵਾਦ","ਅਸਲੀ"],"pt":["traduzir","original"],"ps":["ژباړه","اصلي"],"ny":["masulira","choyambirira"],"ak":["kyerɛ aseɛ","ankasa"],"ja":["翻訳","オリジナル"],"sv":["Översätt","original-"],"sm":["fa\'aliliu","muamua"],"sr":["превести","оригинални"],"nso":["fetolela","mathomo"],"st":["fetolela","ea mantlha"],"si":["පරිවර්තනය කරන්න","මුල්"],"eo":["traduki","originala"],"sk":["preložiť","originálny"],"sl":["prevesti","original"],"sw":["kutafsiri","asili"],"gd":["eadar-theangachadh","thùsail"],"ceb":["paghubad","orihinal"],"so":["turjun","asalka ah"],"tg":["тарҷума кунед","аслӣ"],"te":["అనువదించు","అసలు"],"ta":["மொழிபெயர்","அசல்"],"th":["แปลภาษา","ต้นฉบับ"],"tr":["Çevirmek","orijinal"],"tk":["terjime et","asyl"],"cy":["cyfieithu","gwreiddiol"],"ug":["تەرجىمە","original"],"ur":["ترجمہ","اصل"],"uk":["перекладати","оригінальний"],"uz":["tarjima qiling","original"],"es":["traducir","original"],"iw":["תרגם","מְקוֹרִי"],"el":["μεταφράζω","πρωτότυπο"],"haw":["unuhi","kumu"],"sd":["ترجمو","اصل"],"hu":["fordít","eredeti"],"sn":["shandura","original"],"hy":["թարգմանել","օրիգինալ"],"ig":["sụgharịa","mbụ"],"ilo":["itarus","orihinal"],"it":["tradurre","originale"],"yi":["איבערזעצן","אָריגינעל"],"hi":["अनुवाद करना","मूल"],"su":["narjamahkeun","aslina"],"id":["menerjemahkan","asli"],"jw":["nerjemahake","asline"],"en":["translate","original"],"yo":["tumọ","atilẹba"],"vi":["dịch","nguyên bản"],"zh-TW":["翻譯","原文"],"zh-CN":["翻译","原文"],"ts":["hundzuluxa","mampela"]}'
)

export const requestButtonNames = (lang: string) => {
  const googleLang = getGoogleLanguageSupport(lang)
  // 静态表查询
  if (googleLang in btnNameMap) {
    ;[btnTranslateName, btnOriginalName] = btnNameMap[googleLang]
    return
  }
  // api查询
  const googleApi = apis.google
  const query = {
    text: btnTranslateName + '\n' + btnOriginalName,
    to: googleApi.language(lang),
  }
  googleApi.api.translate(query).then(raw => {
    const r = googleApi.api.transform(query, raw)
    if (r.result) {
      ;[btnTranslateName, btnOriginalName] = r.result
    }
  })
}

export const getBtnNames = (): [btnTranslateName: string, btnOriginalName: string] => {
  return [btnTranslateName, btnOriginalName]
}

/**
 * 从当前元素向上找特定id的元素
 * @param target 当前元素
 * @param id 元素id
 * @returns HTMLElement
 */
export const findParentById = (target: Element, id: string): Element | null => {
  if (!target) return null
  if (target.id === id) return target
  if (target.parentNode) {
    return findParentById(target.parentNode as Element, id)
  }
  return null
}