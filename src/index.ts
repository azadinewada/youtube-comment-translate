import { findParentById, getBtnNames, requestButtonNames } from './button'
import TranslateBtn from './ui/traslateBtn'

/**
 * 替换新的Button
 * @param node 发生变化的#content-text
 */
const replaceButton = (node: Node) => {
  const mainElement = findParentById(node as HTMLElement, 'main')
  if (mainElement) {
    const toolbar = mainElement.querySelector('#toolbar')
    if (toolbar) {
      let btn = toolbar.querySelector('div[name="translate_btn"]')
      if (btn) {
        toolbar.removeChild(btn)
      }
      btn = new TranslateBtn(getBtnNames(), lang || 'zh-Hans-CN').getBtn()
      toolbar.appendChild(btn)
    }
  }
}

/**
 * 对评论内容进行监听, 将内容更新的元素替换新的按钮
 */
const contentTextObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    let parent: ParentNode // 记录parent 只替换一次
    mutation.addedNodes.forEach(node => {
      if (node.parentNode) {
        if (node.parentNode !== parent) {
          parent = node.parentNode
          // 更换按钮
          replaceButton(parent)
        }
      }
    })
  })
})

// 监听contents变化，发生变化后 添加新的按钮
const contentsObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node instanceof Element) {
        const contentText = node.querySelector('#content-text')
        if (contentText) {
          // 对评论内容进行监听
          contentTextObserver.observe(contentText, { childList: true, characterData: true })
        }
        const toolbar = node.querySelector('#toolbar')
        let btn
        if (toolbar) {
          // 如果已添加按钮，节点变化时不再重复添加
          btn = toolbar.querySelector('div[name="translate_btn"]')
          if (!btn) {
            btn = new TranslateBtn(getBtnNames(), lang || 'zh-Hans-CN').getBtn()
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
const commentsObserver = new MutationObserver(mutations => {
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
const observer = new MutationObserver(mutations => {
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

// 检查语言
const lang = document.documentElement.getAttribute('lang')
if (lang) {
  requestButtonNames(lang)
}

const el = document.querySelector('#page-manager')
const options = {
  childList: true,
}
if (el) {
  observer.observe(el, options)
} else {
  console.error('启动失败，请尝试刷新网页重试')
}
