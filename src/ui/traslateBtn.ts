import apis from '../tranlate'

class TranslateBtn {
  private btn: HTMLDivElement // 翻译按钮实例
  private contentElement?: HTMLSpanElement // 包裹翻译内容的span元素
  private sourceText: string // 备份原内容
  private translatedText: string // 备份翻译内容
  private isPlainText: boolean // 标记是否为纯文本
  private isTranslated: boolean //标记是否已经被翻译
  constructor() {
    this.sourceText = ''
    this.translatedText = ''
    this.isPlainText = true
    this.isTranslated = false
    this.btn = this._createBtn()
    this._addClickListener(this.btn)
  }

  public getBtn(): HTMLDivElement {
    return this.btn
  }

  private _createBtn(): HTMLDivElement {
    let div = document.createElement('div')
    div.setAttribute('name', 'translate_btn')
    let button = document.createElement('button')
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
      if (this.isPlainText) {
        // 纯文本模式处理方式
        contentTextElement.textContent = this.translatedText
      } else {
        // 非纯文本模式处理方式
        // 隐藏所有子元素
        contentTextElement.childNodes.forEach(node => {
          if (node instanceof HTMLElement) {
            node.style.visibility = 'hidden'
            node.style.position = 'absolute'
          }
        })
        // 增加翻译内容元素
        if (!this.contentElement) {
          this.contentElement = document.createElement('span')
          this.contentElement.className = 'style-scope yt-formatted-string'
          this.contentElement.textContent = this.translatedText
        }
        contentTextElement.appendChild(this.contentElement)
      }
      // 更改按钮名称
      this._changeBtnName(this.btn, '原文')
    } else {
      if (this.isPlainText) {
        contentTextElement.textContent = this.sourceText
      } else {
        // 移除翻译内容元素
        if (this.contentElement) {
          contentTextElement.removeChild(this.contentElement)
        }
        // 显示所有子元素
        contentTextElement.childNodes.forEach(node => {
          if (node instanceof HTMLElement) node.style.removeProperty('visibility')
          if (node instanceof HTMLElement) node.style.removeProperty('position')
        })
      }
      // 更改按钮名称
      this._changeBtnName(this.btn, '翻译')
    }
  }

  /**
   * 更新内容
   * @param contentTextElement 内容所在元素
   */
  private _update(contentTextElement: Element) {
    // 记录原文本
    if (!this.sourceText) {
      this.sourceText = contentTextElement.textContent || ''
    }
    // 使用备份
    if (this.translatedText) {
      this._changeState(true, contentTextElement)
      return
    }
    // 查询翻译结果并渲染
    let googleApi = apis.google
    const query = {
      text: this.sourceText,
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
      let mainElement = this._findParentById(event.target as HTMLDivElement, 'main')
      if (!mainElement) {
        console.error('找不到#main元素')
        return
      }
      let contentTextElement = mainElement.querySelector('#content-text')
      if (!contentTextElement) {
        console.error('找不到#content-text元素')
        return
      }
      // 标记是否为纯文本内容
      if (contentTextElement.childNodes.length > 1) {
        this.isPlainText = false
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
