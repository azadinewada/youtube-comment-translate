import apis from './tranlate'
import TranslateBtn from './ui/traslateBtn'

// 监听Node变化，发生变化后 添加新的按钮
const contentsObserver = new MutationObserver((mutations, observer) => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node instanceof Element) {
        const toolbar = node.querySelector('#toolbar')
        let btn
        if (toolbar) {
          // 如果已添加按钮，节点变化时不再重复添加
          btn = toolbar.querySelector('div[name="translate_btn"]')
          if (!btn) {
            btn = new TranslateBtn(
              [btnTranslateName, btnOriginalName],
              lang || 'zh-Hans-CN'
            ).getBtn()
            toolbar.appendChild(btn)
          }
        }
        // 监听回复节点
        const replies = node.querySelector('#replies')
        const contents = replies?.querySelector('#contents')
        if (contents) {
          contentsObserver.observe(contents, options)
        }
      }
    })
  })
})
const commentsObserver = new MutationObserver((mutations, observer) => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node instanceof Element) {
        const contents = node.querySelector('#contents')
        if (contents) {
          contentsObserver.observe(contents, options)
        }
      }
    })
  })
})
const observer = new MutationObserver((mutations, observer) => {
  mutations.forEach(mutation => {
    // 此时mutation就是一个MutationRecord对象
    mutation.addedNodes.forEach(node => {
      if (node instanceof Element) {
        const comments = node.querySelector('#comments')
        if (comments) {
          commentsObserver.observe(comments, options)
        }
      }
    })
  })
})

let btnTranslateName = '翻译'
let btnOriginalName = '原文'
const requestButtonName = (lang: string) => {
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

// 检查语言
const lang = document.documentElement.getAttribute('lang')
if (lang) {
  requestButtonName(lang)
}

const el = document.querySelector('#page-manager')
const options = {
  childList: true,
  // attributes: true,
}
if (el) {
  observer.observe(el, options)
} else {
  console.error('启动失败，请尝试刷新网页重试')
}
