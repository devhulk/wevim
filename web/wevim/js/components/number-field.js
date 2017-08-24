import NumberFieldStyles from './styles/number-field-styles'

export default class NumberField {
  constructor (config) {
    this.options = config.options
    this.data = config.data
    this.styles = new NumberFieldStyles()
  } 

  getContent() {
    // Create NumberField
    let numberField = document.createElement('div')
    numberField.id = `${this.options.viewItem.name}Container`
    numberField.classList.add('col-4')
    this.setStyle(numberField, this.styles.getStyle('numberField'))
    if(this.options.isDefault) {
      this.setStyle(numberField, this.styles.getStyle('show'))
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
    textInput.onkeydown = () => { this.styles.keydown(this.options.viewItem.name, event) }

    textField.appendChild(textInput)

    return numberField
  } 

  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
