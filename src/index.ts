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
            btn = new TranslateBtn().getBtn()
            toolbar.appendChild(btn)
          }
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
