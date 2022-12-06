export default 
`// ==UserScript==
// @name          YouTube评论翻译按钮
// @namespace     https://github.com/linkwanggo
// @version       0.1.2
// @description   在YouTube的评论上添加一个翻译按钮 (￣y▽,￣)╭ 
// @author        linkwanggo
// @copyright     2022, linkwanggo (https://github.com/linkwanggo)
// @icon          data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAD/EAAA/0AAAP9AAAD/cAAA/4AAAP+AAAD/gAAA/4AAAP+AAAD/QAAA/0AAAP8Q////AP///wD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8AAAD/MAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/MAAA/1AAAP//AAD//wAA//8AAP//AAD//wAA//8QEP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//1BQ//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/gAAA//8AAP//AAD//wAA//8AAP//AAD/////////////wMD//yAg//8AAP//AAD//wAA//8AAP//AAD/gAAA/4AAAP//AAD//wAA//8AAP//AAD//wAA/////////////7Cw//8gIP//AAD//wAA//8AAP//AAD//wAA/4AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//0BA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/UAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/YAAA/zAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/zD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8A////AP///wAAAP8QAAD/QAAA/0AAAP+AAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP9AAAD/QAAA/xD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAMADAAD//wAA//8AAA==
// @license       MIT
// @match         *://www.youtube.com/*
// @match         *://www.youtube.com/watch*
// @compatible    chrome
// @compatible    firefox
// @grant         none
// @source        https://github.com/linkwanggo/youtube-comment-translate
// @supportURL    https://github.com/linkwanggo/youtube-comment-translate/issues
// @downloadURL   https://greasyfork.org/scripts/456108-youtube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE/code/YouTube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE.user.js
// @updateURL     https://greasyfork.org/scripts/456108-youtube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE/code/YouTube%E8%AF%84%E8%AE%BA%E7%BF%BB%E8%AF%91%E6%8C%89%E9%92%AE.user.js
// ==/UserScript==
/* globals $ waitForKeyElements */
// @[ You can find all source codes in GitHub repo ]
`