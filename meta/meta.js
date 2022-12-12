const name = 'YouTube评论翻译按钮'
const version = '3.1.0'
const namespace = 'https://github.com/linkwanggo'
const description = '在YouTube的评论上添加一个翻译按钮'
const author = 'linkwanggo'
const copyright = '2022, linkwanggo (https://github.com/linkwanggo)'
const icon =
  'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAD/EAAA/0AAAP9AAAD/cAAA/4AAAP+AAAD/gAAA/4AAAP+AAAD/QAAA/0AAAP8Q////AP///wD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8AAAD/MAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/MAAA/1AAAP//AAD//wAA//8AAP//AAD//wAA//8QEP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//1BQ//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/gAAA//8AAP//AAD//wAA//8AAP//AAD/////////////wMD//yAg//8AAP//AAD//wAA//8AAP//AAD/gAAA/4AAAP//AAD//wAA//8AAP//AAD//wAA/////////////7Cw//8gIP//AAD//wAA//8AAP//AAD//wAA/4AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//0BA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/UAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/YAAA/zAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/zD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8A////AP///wAAAP8QAAD/QAAA/0AAAP+AAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP9AAAD/QAAA/xD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAMADAAD//wAA//8AAA=='
const license = 'MIT'
const source = 'https://github.com/linkwanggo/youtube-comment-translate'
const supportURL = 'https://github.com/linkwanggo/youtube-comment-translate/issues'
const downloadURL =
  'https://greasyfork.org/scripts/456108-youtube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE/code/YouTube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE.user.js'
const updateURL =
  'https://greasyfork.org/scripts/456108-youtube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE/code/YouTube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE.user.js'

const languageAreaMap = JSON.parse(
  '{"af":{"name":"Youtube opmerking vertaling knoppie","description":"Voeg \'n vertaalknoppie by YouTube-opmerkings"},"az":{"name":"Youtube şərh tərcümə düyməsi","description":"YouTube şərhlərinə tərcümə düyməsi əlavə edin"},"id":{"name":"Tombol terjemahan komentar Youtube","description":"Tambahkan tombol terjemahan ke komentar YouTube"},"ms":{"name":"Butang terjemahan ulasan Youtube","description":"Tambahkan butang terjemah pada ulasan YouTube"},"bs":{"name":"Dugme za prijevod komentara na Youtube-u","description":"Dodajte dugme za prevod na YouTube komentare"},"ca":{"name":"Botó de traducció de comentaris de Youtube","description":"Afegeix un botó de traducció als comentaris de YouTube"},"cs":{"name":"Tlačítko překladu komentáře na YouTube","description":"Přidejte do komentářů na YouTube tlačítko překladu"},"da":{"name":"Youtube kommentaroversættelsesknap","description":"Tilføj en oversæt-knap til YouTube-kommentarer"},"de":{"name":"Schaltfläche zur Übersetzung von Youtube-Kommentaren","description":"Fügen Sie YouTube-Kommentaren eine Schaltfläche zum Übersetzen hinzu"},"et":{"name":"Youtube\'i kommentaaride tõlkimise nupp","description":"Lisage YouTube\'i kommentaaridele tõlkenupp"},"en":{"name":"Youtube comment translation button","description":"Add a translate button to YouTube comments"},"es":{"name":"Botón de traducción de comentarios de Youtube","description":"Agregue un botón de traducción a los comentarios de YouTube"},"eu":{"name":"Youtubeko iruzkinak itzultzeko botoia","description":"Gehitu itzultzeko botoia YouTube-ko iruzkinetan"},"fr":{"name":"Bouton de traduction des commentaires Youtube","description":"Ajouter un bouton de traduction aux commentaires YouTube"},"gl":{"name":"Botón de tradución de comentarios de Youtube","description":"Engade un botón de tradución aos comentarios de YouTube"},"hr":{"name":"Youtube gumb za prijevod komentara","description":"Dodajte gumb za prijevod YouTube komentarima"},"zu":{"name":"Inkinobho yokuhumusha amazwana e-YouTube","description":"Engeza inkinobho yokuhumusha emazwaneni e-YouTube"},"is":{"name":"Þýðingarhnappur YouTube athugasemda","description":"Bættu þýðingahnappi við YouTube athugasemdir"},"it":{"name":"Pulsante di traduzione dei commenti di Youtube","description":"Aggiungi un pulsante di traduzione ai commenti di YouTube"},"sw":{"name":"Kitufe cha kutafsiri maoni kwenye Youtube","description":"Ongeza kitufe cha kutafsiri kwenye maoni ya YouTube"},"lv":{"name":"Youtube komentāru tulkošanas poga","description":"Pievienojiet tulkošanas pogu YouTube komentāriem"},"lt":{"name":"Youtube komentaro vertimo mygtukas","description":"Pridėkite vertimo mygtuką prie „YouTube“ komentarų"},"hu":{"name":"Youtube megjegyzés fordítás gomb","description":"Adj hozzá egy fordítási gombot a YouTube-megjegyzésekhez"},"nl":{"name":"Vertaalknop voor YouTube-commentaar","description":"Voeg een vertaalknop toe aan YouTube-opmerkingen"},"uz":{"name":"Youtube sharhini tarjima qilish tugmasi","description":"YouTube sharhlariga tarjima tugmasi qo\'shing"},"pl":{"name":"Przycisk tłumaczenia komentarzy na YouTube","description":"Dodaj przycisk tłumaczenia do komentarzy YouTube"},"pt":{"name":"Botão de tradução de comentários do Youtube","description":"Adicione um botão de tradução aos comentários do YouTube"},"ro":{"name":"Buton de traducere a comentariilor Youtube","description":"Adăugați un buton de traducere la comentariile YouTube"},"sq":{"name":"Butoni i përkthimit të komenteve në Youtube","description":"Shto një buton përkthimi në komentet në YouTube"},"sk":{"name":"Tlačidlo prekladu komentárov na YouTube","description":"Pridajte tlačidlo prekladu do komentárov na YouTube"},"sl":{"name":"Gumb za prevod komentarjev Youtube","description":"Komentarjem v YouTubu dodajte gumb za prevajanje"},"sr":{"name":"Дугме за превод коментара на Иоутубе-у","description":"Додајте дугме за превод на ИоуТубе коментаре"},"fi":{"name":"Youtube-kommenttien käännöspainike","description":"Lisää käännöspainike YouTube-kommentteihin"},"sv":{"name":"Youtube-kommentaröversättningsknapp","description":"Lägg till en översättningsknapp i YouTube-kommentarer"},"vi":{"name":"Nút dịch bình luận Youtube","description":"Thêm nút dịch vào nhận xét trên YouTube"},"tr":{"name":"Youtube yorum çeviri butonu","description":"YouTube yorumlarına çeviri düğmesi ekleyin"},"be":{"name":"Кнопка перакладу каментарыяў Youtube","description":"Дадайце кнопку перакладу ў каментарыі YouTube"},"bg":{"name":"Бутон за превод на коментари в Youtube","description":"Добавете бутон за превод към коментарите в YouTube"},"ky":{"name":"Youtube комментарий которуу баскычы","description":"YouTube жорумдарына которуу баскычын кошуңуз"},"kk":{"name":"Youtube пікірін аудару түймесі","description":"YouTube пікірлеріне аудару түймесін қосыңыз"},"mk":{"name":"Копче за превод на коментари на YouTube","description":"Додајте копче за превод во коментарите на YouTube"},"mn":{"name":"Youtube сэтгэгдлийг орчуулах товч","description":"YouTube-ийн сэтгэгдэлд орчуулах товчлуур нэмнэ үү"},"ru":{"name":"Кнопка перевода комментариев на Youtube","description":"Добавьте кнопку перевода в комментарии YouTube"},"uk":{"name":"Кнопка перекладу коментарів Youtube","description":"Додайте кнопку перекладу до коментарів YouTube"},"el":{"name":"Κουμπί μετάφρασης σχολίων στο Youtube","description":"Προσθέστε ένα κουμπί μετάφρασης στα σχόλια του YouTube"},"hy":{"name":"Youtube մեկնաբանությունների թարգմանության կոճակ","description":"Ավելացրեք թարգմանության կոճակ YouTube մեկնաբանություններում"},"ur":{"name":"یوٹیوب تبصرے کا ترجمہ بٹن","description":"YouTube تبصروں میں ترجمہ کا بٹن شامل کریں۔"},"ar":{"name":"زر ترجمة التعليق على اليوتيوب","description":"أضف زر ترجمة إلى تعليقات YouTube"},"fa":{"name":"دکمه ترجمه نظر یوتیوب","description":"یک دکمه ترجمه به نظرات YouTube اضافه کنید"},"ne":{"name":"Youtube टिप्पणी अनुवाद बटन","description":"YouTube टिप्पणीहरूमा अनुवाद बटन थप्नुहोस्"},"mr":{"name":"YouTube टिप्पणी भाषांतर बटण","description":"YouTube टिप्पण्यांमध्ये भाषांतर बटण जोडा"},"hi":{"name":"यूट्यूब टिप्पणी अनुवाद बटन","description":"YouTube टिप्पणियों में अनुवाद बटन जोड़ें"},"as":{"name":"Youtube comment অনুবাদ বুটাম","description":"ইউটিউবৰ মন্তব্যত এটা অনুবাদ বুটাম যোগ কৰক"},"bn":{"name":"ইউটিউব মন্তব্য অনুবাদ বোতাম","description":"YouTube মন্তব্যে একটি অনুবাদ বোতাম যোগ করুন"},"pa":{"name":"ਯੂਟਿਊਬ ਟਿੱਪਣੀ ਅਨੁਵਾਦ ਬਟਨ","description":"YouTube ਟਿੱਪਣੀਆਂ ਵਿੱਚ ਇੱਕ ਅਨੁਵਾਦ ਬਟਨ ਸ਼ਾਮਲ ਕਰੋ"},"gu":{"name":"YouTube ટિપ્પણી અનુવાદ બટન","description":"YouTube ટિપ્પણીઓમાં અનુવાદ બટન ઉમેરો"},"or":{"name":"ୟୁଟ୍ୟୁବ୍ ମନ୍ତବ୍ୟ ଅନୁବାଦ ବଟନ୍ |","description":"ୟୁଟ୍ୟୁବ୍ ମନ୍ତବ୍ୟଗୁଡିକରେ ଏକ ଅନୁବାଦ ବଟନ୍ ଯୋଡନ୍ତୁ |"},"ta":{"name":"Youtube கருத்து மொழிபெயர்ப்பு பொத்தான்","description":"YouTube கருத்துகளில் மொழிபெயர்ப்பு பொத்தானைச் சேர்க்கவும்"},"te":{"name":"Youtube వ్యాఖ్య అనువాదం బటన్","description":"YouTube వ్యాఖ్యలకు అనువాద బటన్‌ను జోడించండి"},"kn":{"name":"ಯುಟ್ಯೂಬ್ ಕಾಮೆಂಟ್ ಅನುವಾದ ಬಟನ್","description":"YouTube ಕಾಮೆಂಟ್‌ಗಳಿಗೆ ಅನುವಾದ ಬಟನ್ ಅನ್ನು ಸೇರಿಸಿ"},"ml":{"name":"Youtube കമന്റ് വിവർത്തന ബട്ടൺ","description":"YouTube അഭിപ്രായങ്ങളിലേക്ക് ഒരു വിവർത്തന ബട്ടൺ ചേർക്കുക"},"si":{"name":"Youtube අදහස් පරිවර්තන බොත්තම","description":"YouTube අදහස් සඳහා පරිවර්තන බොත්තමක් එක් කරන්න"},"th":{"name":"ปุ่มแปลความคิดเห็น Youtube","description":"เพิ่มปุ่มแปลความคิดเห็นใน YouTube"},"lo":{"name":"ປຸ່ມແປຄຳເຫັນ Youtube","description":"ເພີ່ມປຸ່ມແປພາສາໃສ່ຄຳເຫັນ YouTube"},"my":{"name":"Youtube မှတ်ချက် ဘာသာပြန်ခလုတ်","description":"YouTube မှတ်ချက်များသို့ ဘာသာပြန်ရန် ခလုတ်တစ်ခု ထည့်ပါ။"},"ka":{"name":"Youtube კომენტარების თარგმნის ღილაკი","description":"დაამატეთ თარგმანის ღილაკი YouTube კომენტარებში"},"am":{"name":"የዩቲዩብ አስተያየት ትርጉም ቁልፍ","description":"በYouTube አስተያየቶች ላይ የትርጉም ቁልፍ ያክሉ"},"km":{"name":"ប៊ូតុងបកប្រែមតិយោបល់ Youtube","description":"បន្ថែមប៊ូតុងបកប្រែទៅមតិយោបល់ YouTube"},"zh-CN":{"name":"YouTube评论翻译按钮","description":"在YouTube的评论上添加一个翻译按钮"},"zh-TW":{"name":"YouTube評論翻譯按鈕","description":"在YouTube的評論上添加一個翻譯按鈕"},"zh-HK":{"name":"YouTube评论翻译按钮","description":"在YouTube的评论上添加一个翻译按钮"},"ja":{"name":"Youtubeコメント翻訳ボタン","description":"YouTube のコメントに翻訳ボタンを追加する"},"ko":{"name":"유튜브 댓글 번역 버튼","description":"YouTube 댓글에 번역 버튼 추가"}}'
)

const common = `
// @namespace     ${namespace}
// @version       ${version}
// @author        ${author}
// @copyright     ${copyright}
// @icon          ${icon}
// @match         *://www.youtube.com/*
// @match         *://www.youtube.com/watch*
// @compatible    chrome
// @compatible    firefox
// @compatible    edge
// @grant         none
// @source        ${source}
// @supportURL    ${supportURL}
// @downloadURL   ${downloadURL}
// @updateURL     ${updateURL}
// ==/UserScript==
/* globals $ waitForKeyElements */
// @[ You can find all source codes in GitHub repo ]
`

export const bannerDev = () => {
  let s = `// ==UserScript==
// @name             ${name}`
  for (let n in languageAreaMap) {
    s += '\n'
    s += `// @name:${n}          ${languageAreaMap[n].name}(Dev)`
  }
  s += '\n'
  s += `// @description:            ${description}`
  for (let n in languageAreaMap) {
    s += '\n'
    s += `// @description:${n}          ${languageAreaMap[n].description}`
  }
  s += common
  return s
}

export const bannerPreRelease = () => {
  let s = `// ==UserScript==
// @name             ${name}`
  for (let n in languageAreaMap) {
    s += '\n'
    s += `// @name:${n}          ${languageAreaMap[n].name}(Pre Release)`
  }
  s += '\n'
  s += `// @description:            ${description}`
  for (let n in languageAreaMap) {
    s += '\n'
    s += `// @description:${n}          ${languageAreaMap[n].description}`
  }
  s += common
  return s
}
export const bannerProd = () => {
  let s = `// ==UserScript==
// @name             ${name}`
  for (let n in languageAreaMap) {
    s += '\n'
    s += `// @name:${n}          ${languageAreaMap[n].name}`
  }
  s += '\n'
  s += `// @description:            ${description}`
  for (let n in languageAreaMap) {
    s += '\n'
    s += `// @description:${n}          ${languageAreaMap[n].description}`
  }
  s += common
  return s
}
