import OptionItemStyles from './styles/option-item-styles'

export default class OptionItem {
  constructor (options, data) {
    this.viewItem = options.viewItem
    this.showItem = options.showItem
    this.styles = new OptionItemStyles()
    this.data = data
  } 

  getContent() {
    // Create OptionItem
    let optionItem = document.createElement('div')
    optionItem.id = `${this.viewItem.name}OptionItem`
    this.setStyle(optionItem, this.styles.getStyle('optionItem'))

    optionItem.onmouseover = () => {
      let optionItemHeaderText = document.getElementById(`${this.viewItem.name}OptionItemHeaderText`)
      this.setStyle(optionItemHeaderText, this.styles.getStyle('optionItemHeaderTextHighlight'))
    }

    optionItem.onmouseout = () => {
      let optionItemHeaderText = document.getElementById(`${this.viewItem.name}OptionItemHeaderText`)
      this.setStyle(optionItemHeaderText, this.styles.getStyle('optionItemHeaderText'))
    }

    optionItem.onclick = () => {
      this.showItem(this.viewItem)
    }
    
    // Create OptionItem Header
    let optionItemHeader = document.createElement('div')
    this.setStyle(optionItemHeader, this.styles.getStyle('optionItemHeader'))


    // Create OptionItem Header Text
    let optionItemHeaderText = document.createElement('div')
    optionItemHeaderText.id = `${this.viewItem.name}OptionItemHeaderText`
    optionItemHeaderText.appendChild(document.createTextNode(this.viewItem.title))
    this.setStyle(optionItemHeaderText, this.styles.getStyle('optionItemHeaderText'))
    optionItemHeader.appendChild(optionItemHeaderText)

    optionItem.appendChild(optionItemHeader)

    // Create OptionItem Footer
    let optionItemFooter = document.createElement('div')
    this.setStyle(optionItemFooter, this.styles.getStyle('optionItemFooter'))

    if(this.data[this.viewItem.column]) {
      // Create OptionItem Footer Text
      let optionItemFooterText = document.createElement('div')
      optionItemFooterText.appendChild(document.createTextNode(this.data[this.viewItem.column]))
      this.setStyle(optionItemFooterText, this.styles.getStyle('optionItemFooterText'))
      optionItemFooter.appendChild(optionItemFooterText)

      optionItem.appendChild(optionItemFooter)
    }

    return optionItem
  } 
  
  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
