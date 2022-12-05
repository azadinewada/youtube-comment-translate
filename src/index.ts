import TranslateBtn from './ui/traslateBtn'

// 监听Node变化，发生变化后 添加新的按钮
const contentsObserver = new MutationObserver(function (mutations, observer) {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node instanceof Element) {
        const btn = new TranslateBtn().getBtn()
        const toolbar = node.querySelector('#toolbar')
        toolbar?.appendChild(btn)
      }
    })
  })
})
const commentsObserver = new MutationObserver(function (mutations, observer) {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node instanceof Element) {
        const contents = (node as Element).querySelector('#contents')
        if (contents) {
          contentsObserver.observe(contents, options)
        }
      }
    })
  })
})
const observer = new MutationObserver(function (mutations, observer) {
  mutations.forEach(mutation => {
    // 此时mutation就是一个MutationRecord对象
    mutation.addedNodes.forEach(node => {
      if (node instanceof Element) {
        const comments = (node as Element).querySelector('#comments')
        if (comments) {
          commentsObserver.observe(comments, options)
        }
      }
    })
  })
})
const el = document.querySelector('#page-manager')
let options = {
  childList: true,
  attributes: true,
}
if (el) {
  observer.observe(el, options)
} else {
  console.error('启动失败，请尝试刷新网页重试')
}
