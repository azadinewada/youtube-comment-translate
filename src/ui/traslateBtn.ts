import apis from '../tranlate'

class TranslateBtn {
  private btn: HTMLElement
  private sourceText: string
  private traslateText: string
  private isTranslated: boolean
  constructor() {
    this.sourceText = ''
    this.traslateText = ''
    this.isTranslated = false
    this.btn = this._createBtn()
    this._addClickListener(this.btn)
  }

  public getBtn(): HTMLElement {
    return this.btn
  }

  private _createBtn(): HTMLElement {
    let trans_div = document.createElement('div')
    let trans_button = document.createElement('button')
    trans_button.textContent = '翻译'
    trans_button.className =
      'yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-s'
    trans_div.appendChild(trans_button)
    return trans_div
  }

  private _changeBtnName(btn: HTMLElement, name: string) {
    btn.firstChild!.textContent = name
  }

  private _findParentById(target: HTMLElement, id: string): HTMLElement | null {
    if (!target) return null
    if (target.id === id) return target
    if (target.parentNode) {
      return this._findParentById(target.parentNode as HTMLElement, id)
    }
    return null
  }

  private _addClickListener(btn: HTMLElement) {
    btn.addEventListener('click', (event: MouseEvent) => {
      let mainElement = this._findParentById(event.target as HTMLElement, 'main')
      if (mainElement) {
        let contentTextElement = mainElement.querySelector('#content-text')
        if (contentTextElement && contentTextElement.textContent) {
          if (!this.isTranslated) {
            // 记录原文
            if (!this.sourceText) {
              this.sourceText = contentTextElement.textContent
            }
            // 缓存
            if (this.traslateText) {
              contentTextElement.textContent = this.traslateText
              // 更改状态 变更按钮
              this.isTranslated = true
              this._changeBtnName(btn, '原文')
            } else {
              // 查询翻译结果并渲染
              let googleApi = apis.google
              const query = {
                text: this.sourceText,
                to: googleApi.language['中文(简体)'],
              }
              googleApi.api.translate(query).then(rawResult => {
                const result = googleApi.api.transform(query, rawResult)
                this.traslateText = contentTextElement!.textContent = result.result!.join('\n')
                // 更改状态 变更按钮
                this.isTranslated = true
                this._changeBtnName(btn, '原文')
              })
            }
          } else {
            // 还原状态 还原按钮
            contentTextElement.textContent = this.sourceText
            this.isTranslated = false
            this._changeBtnName(btn, '翻译')
          }
        }
      }
    })
  }
}

export default TranslateBtn
