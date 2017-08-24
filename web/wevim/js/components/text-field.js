import TextFieldStyles from './styles/text-field-styles'

export default class TextField {
  constructor (config) {
    this.options = config.options
    this.data = config.data
    this.styles = new TextFieldStyles()
  } 

  getContent() {
    // Create TextField
    let textField = document.createElement('div')
    textField.id = `${this.options.viewItem.name}Container`
    textField.classList.add('col-4')
    this.setStyle(textField, this.styles.getStyle('textField'))
    if(this.options.isDefault) {
      this.setStyle(textField, this.styles.getStyle('show'))
    }
    
    let textInput = document.createElement('input')
    textInput.id = this.options.viewItem.name
    textInput.type = 'text'
    textInput.value = this.data[this.options.viewItem.column]
    this.setStyle(textInput, this.styles.getStyle('textInput'))

    textInput.onfocus = () => { this.styles.focus(this.options.viewItem.name) }
    textInput.onblur = () => { this.styles.onblur(this.options.viewItem.name) }
    textInput.onmouseover = () => { this.styles.mouseover(this.options.viewItem.name) }
    textInput.onmouseout = () => { this.styles.mouseout(this.options.viewItem.name) }


    textField.appendChild(textInput)

    return textField
  } 

  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
