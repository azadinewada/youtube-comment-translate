const name = 'YouTube评论翻译按钮'
const version = '1.0.0'
const namespace = 'https://github.com/linkwanggo'
const description = '在YouTube的评论上添加一个翻译按钮 (￣y▽,￣)╭ '
const author = 'linkwanggo'
const copyright = '2022, linkwanggo (https://github.com/linkwanggo)'
const icon = 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAD/EAAA/0AAAP9AAAD/cAAA/4AAAP+AAAD/gAAA/4AAAP+AAAD/QAAA/0AAAP8Q////AP///wD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8AAAD/MAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/MAAA/1AAAP//AAD//wAA//8AAP//AAD//wAA//8QEP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//1BQ//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/gAAA//8AAP//AAD//wAA//8AAP//AAD/////////////wMD//yAg//8AAP//AAD//wAA//8AAP//AAD/gAAA/4AAAP//AAD//wAA//8AAP//AAD//wAA/////////////7Cw//8gIP//AAD//wAA//8AAP//AAD//wAA/4AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//0BA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/UAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/YAAA/zAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/zD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8A////AP///wAAAP8QAAD/QAAA/0AAAP+AAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP9AAAD/QAAA/xD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAMADAAD//wAA//8AAA=='
const license = 'MIT'
const source = 'https://github.com/linkwanggo/youtube-comment-translate'
const supportURL = 'https://github.com/linkwanggo/youtube-comment-translate/issues'
const downloadURL = 'https://greasyfork.org/scripts/456108-youtube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE/code/YouTube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE.user.js'
const updateURL = 'https://greasyfork.org/scripts/456108-youtube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE/code/YouTube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE.user.js'

export const bannerDev = `// ==UserScript==
// @name          ${name}(Dev)
// @namespace     ${namespace}
// @version       ${version}
// @description   ${description}
// @author        ${author}
// @copyright     ${copyright}
// @icon          ${icon}
// @license       ${license}
// @match         *://www.youtube.com/*
// @match         *://www.youtube.com/watch*
// @compatible    chrome
// @compatible    firefox
// @grant         none
// @source        ${source}
// @supportURL    ${supportURL}
// @downloadURL   ${downloadURL}
// @updateURL     ${updateURL}
// ==/UserScript==
/* globals $ waitForKeyElements */
// @[ You can find all source codes in GitHub repo ]
`

export const bannerPreRelease = `// ==UserScript==
// @name          ${name}(Pre Release)
// @namespace     ${namespace}
// @version       ${version}
// @description   ${description}
// @author        ${author}
// @copyright     ${copyright}
// @icon          ${icon}
// @license       ${license}
// @match         *://www.youtube.com/*
// @match         *://www.youtube.com/watch*
// @compatible    chrome
// @compatible    firefox
// @grant         none
// @source        ${source}
// @supportURL    ${supportURL}
// @downloadURL   ${downloadURL}
// @updateURL     ${updateURL}
// ==/UserScript==
/* globals $ waitForKeyElements */
// @[ You can find all source codes in GitHub repo ]
`
export const bannerProd = `// ==UserScript==
// @name          ${name}
// @namespace     ${namespace}
// @version       ${version}
// @description   ${description}
// @author        ${author}
// @copyright     ${copyright}
// @icon          ${icon}
// @license       ${license}
// @match         *://www.youtube.com/*
// @match         *://www.youtube.com/watch*
// @compatible    chrome
// @compatible    firefox
// @grant         none
// @source        ${source}
// @supportURL    ${supportURL}
// @downloadURL   ${downloadURL}
// @updateURL     ${updateURL}
// ==/UserScript==
/* globals $ waitForKeyElements */
// @[ You can find all source codes in GitHub repo ]
`
