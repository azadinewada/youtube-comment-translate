import { findParentById } from '../button'
import apis from '../tranlate'

type BtnNames = [btnTranslateName: string, btnOriginalName: string]

type SourceItem = [name: string, value: string]

class TranslateBtn {
  private lang: string // 语言类型
  private btn: HTMLDivElement // 翻译按钮实例
  private btnTranslateName: string // 多语言`翻译`名
  private btnOriginalName: string // 多语言`原文`名
  private sourceContents: SourceItem[] // 备份原文本内容数组
  private translatedContents: string[] // 备份翻译后的内容数组
  private isTranslated: boolean //标记是否已经被翻译
  constructor(btnNames: BtnNames, lang: string) {
    this.lang = lang
    this.btnTranslateName = btnNames[0]
    this.btnOriginalName = btnNames[1]
    this.sourceContents = []
    this.translatedContents = []
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
    button.textContent = this.btnTranslateName
    button.className =
      'yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-s'
    div.appendChild(button)
    return div
  }

  private _changeBtnName(btn: HTMLDivElement, name: string) {
    if (btn.firstChild) btn.firstChild.textContent = name
  }

  private _changeState(isTranslated: boolean, contentTextElement: Element) {
    // 记录翻译状态
    this.isTranslated = isTranslated
    if (isTranslated) {
      // 填充翻译内容
      // 直接在元素上修改值
      let i = 0
      let j = 0
      while (i < contentTextElement.childNodes.length && j < this.translatedContents.length) {
        const node = contentTextElement.childNodes[i]
        const translatedContent = this.translatedContents[j]
        const name = node.nodeName
        // 条件判断
        if (name === 'IMG') {
          i++
          continue
        } else if (name === 'SPAN') {
          if (node.textContent === '\n') {
            i++
            continue
          }
        }
        if (translatedContent === '') {
          j++
          continue
        }
        // 赋值
        switch (name) {
          case '#text': {
            node.nodeValue = translatedContent
            break
          }
          case 'SPAN': {
            ;(node as HTMLElement).innerText = translatedContent
            break
          }
          case 'A': {
            ;(node as HTMLElement).innerText = translatedContent
            break
          }
        }
        i++
        j++
      }
      // 更改按钮名称
      this._changeBtnName(this.btn, this.btnOriginalName)
    } else {
      // 还原翻译内容
      let i = 0
      let j = 0
      while (i < contentTextElement.childNodes.length && j < this.sourceContents.length) {
        const node = contentTextElement.childNodes[i]
        const item = this.sourceContents[j]
        const name = node.nodeName
        // 条件过滤
        if (name === 'IMG') {
          i++
          continue
        } else if (name === 'SPAN') {
          if (node.textContent === '\n') {
            i++
            continue
          }
        }
        if (item[0] === 'IMG') {
          j++
          continue
        }
        // 赋值
        switch (name) {
          case '#text': {
            node.nodeValue = item[1]
            break
          }
          case 'SPAN': {
            ;(node as HTMLElement).innerText = item[1]
            break
          }
          case 'A': {
            ;(node as HTMLElement).innerText = item[1]
            break
          }
        }
        i++
        j++
      }
      // 更改按钮名称
      this._changeBtnName(this.btn, this.btnTranslateName)
    }
  }

  /**
   * 从内容元素中获取原文本
   * 记录#text还原信息
   */
  private _recordSourceText(contentTextElement: Element) {
    contentTextElement.childNodes.forEach(node => {
      const name = node.nodeName
      switch (name) {
        case '#text': {
          const value = node.nodeValue
          if (value) {
            this.sourceContents.push([name, value])
          }
          break
        }
        case 'SPAN': {
          const text = node.textContent
          if (text && text != '\n') {
            // 换行元素不记录
            // &特殊处理 去除\r元素
            this.sourceContents.push([name, text.replace('\r', '')])
          }
          break
        }
        case 'IMG': {
          const img = (node as Element).getAttribute('alt')
          if (img) {
            this.sourceContents.push([name, img])
          }
          break
        }
        case 'A': {
          const text = node.textContent
          if (text) {
            this.sourceContents.push([name, text])
          }
          break
        }
      }
    })
  }

  /**
   * 更新内容
   * @param contentTextElement 内容所在元素
   */
  private _update(contentTextElement: Element) {
    // 使用备份
    if (this.translatedContents.length > 0) {
      this._changeState(true, contentTextElement)
      return
    }
    // 查询翻译结果并渲染
    const queryText = this.sourceContents
      .filter(item => item[0] !== 'IMG')
      .map(item => item[1])
      .join('\n')
    const googleApi = apis.google
    const query = {
      text: queryText,
      to: googleApi.language(this.lang),
    }
    googleApi.api.translate(query).then(rawResult => {
      const result = googleApi.api.transform(query, rawResult)
      if (!result.result) {
        console.error('翻译失败，找不到翻译结果')
        return
      }
      // 备份翻译内容
      this.translatedContents = result.result
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
      const mainElement = findParentById(event.target as HTMLDivElement, 'main')
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
      if (this.sourceContents.length === 0) {
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
