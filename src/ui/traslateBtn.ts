import apis from '../tranlate'

class TranslateBtn {
  private btn: HTMLDivElement // 翻译按钮实例
  private customContentElement?: HTMLSpanElement // 自定义包裹翻译内容的span元素
  private source: {
    sourceText: string
    nodeTexts: string[]
  } // 备份原文本内容
  private translatedText: string // 备份翻译内容
  private isTranslated: boolean //标记是否已经被翻译
  constructor() {
    this.source = {
      sourceText: '',
      nodeTexts: [],
    }
    this.translatedText = ''
    this.isTranslated = false
    this.btn = this._createBtn()
    this._addClickListener(this.btn)
  }

  public getBtn(): HTMLDivElement {
    return this.btn
  }

  private _createBtn(): HTMLDivElement {
    const div = document.createElement('div')
    div.setAttribute('name', 'translate_btn')
    const button = document.createElement('button')
    button.textContent = '翻译'
    button.className =
      'yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-s'
    div.appendChild(button)
    return div
  }

  private _changeBtnName(btn: HTMLDivElement, name: string) {
    if (btn.firstChild) btn.firstChild.textContent = name
  }

  private _findParentById(target: HTMLDivElement, id: string): HTMLDivElement | null {
    if (!target) return null
    if (target.id === id) return target
    if (target.parentNode) {
      return this._findParentById(target.parentNode as HTMLDivElement, id)
    }
    return null
  }

  private _changeState(isTranslated: boolean, contentTextElement: Element) {
    // 记录翻译状态
    this.isTranslated = isTranslated
    if (isTranslated) {
      // 填充翻译内容

      // 隐藏所有子元素
      contentTextElement.childNodes.forEach(node => {
        const name = node.nodeName
        switch (name) {
          case '#text': {
            node.nodeValue = ''
            break
          }
          case 'SPAN':
          case 'IMG': {
            ;(node as HTMLElement).style.visibility = 'hidden'
            ;(node as HTMLElement).style.position = 'absolute'
            break
          }
        }
      })
      // 增加翻译内容元素
      if (!this.customContentElement) {
        this.customContentElement = document.createElement('span')
        this.customContentElement.className = 'style-scope yt-formatted-string'
        this.customContentElement.textContent = this.translatedText
      }
      contentTextElement.appendChild(this.customContentElement)
      // 更改按钮名称
      this._changeBtnName(this.btn, '原文')
    } else {
      // 还原翻译内容

      // 移除翻译内容元素
      if (this.customContentElement) {
        contentTextElement.removeChild(this.customContentElement)
      }
      // 显示所有子元素
      contentTextElement.childNodes.forEach(node => {
        let i = 0
        const name = node.nodeName
        switch (name) {
          case '#text': {
            node.nodeValue = this.source.nodeTexts[i++]
            break
          }
          case 'SPAN':
          case 'IMG': {
            ;(node as HTMLElement).style.removeProperty('visibility')
            ;(node as HTMLElement).style.removeProperty('position')
            break
          }
        }
      })
      // 更改按钮名称
      this._changeBtnName(this.btn, '翻译')
    }
  }

  /**
   * 从内容元素中获取原文本
   * 记录#text还原信息
   */
  private _recordSourceText(contentTextElement: Element) {
    let s: string = ''
    contentTextElement.childNodes.forEach(node => {
      const name = node.nodeName
      switch (name) {
        case '#text': {
          const value = node.nodeValue
          if (value) {
            s += value
            this.source.nodeTexts.push(value)
          }
          break
        }
        case 'SPAN': {
          const text = node.textContent
          if (text) {
            s += text
          }
          break
        }
        case 'IMG': {
          const img = (node as Element).getAttribute('alt')
          if (img) {
            s += img
          }
          break
        }
        default: {
        }
      }
    })
    this.source.sourceText = s
  }

  /**
   * 更新内容
   * @param contentTextElement 内容所在元素
   */
  private _update(contentTextElement: Element) {
    // 使用备份
    if (this.translatedText) {
      this._changeState(true, contentTextElement)
      return
    }
    // 查询翻译结果并渲染
    const googleApi = apis.google
    const query = {
      text: this.source.sourceText,
      to: googleApi.language['中文(简体)'],
    }
    googleApi.api.translate(query).then(rawResult => {
      const result = googleApi.api.transform(query, rawResult)
      if (!result.result) {
        console.error('翻译失败，找不到翻译结果')
        return
      }
      // 备份翻译内容
      this.translatedText = result.result.join('\n')
      // 更改状态
      this._changeState(true, contentTextElement)
    })
  }

  /**
   * 还原内容
   * @param contentTextElement 内容所在元素
   */
  private _rollback(contentTextElement: Element) {
    // 更改状态
    this._changeState(false, contentTextElement)
  }

  private _addClickListener(btn: HTMLDivElement) {
    btn.addEventListener('click', (event: MouseEvent) => {
      const mainElement = this._findParentById(event.target as HTMLDivElement, 'main')
      if (!mainElement) {
        console.error('找不到#main元素')
        return
      }
      const contentTextElement = mainElement.querySelector('#content-text')
      if (!contentTextElement) {
        console.error('找不到#content-text元素')
        return
      }
      // 记录原文本
      if (!this.source.sourceText) {
        this._recordSourceText(contentTextElement)
      }
      // 判断是否已经翻译过 已翻译：还原 | 未翻译：翻译
      if (this.isTranslated) {
        this._rollback(contentTextElement)
      } else {
        this._update(contentTextElement)
      }
    })
  }
}

export default TranslateBtn
