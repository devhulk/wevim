import ButtonStyles from './styles/button-styles'

export default class Button {
  constructor (options) {
    this.options = options
    this.styles = new ButtonStyles()
  } 

  getContent() {
    // Create Button
    let button = document.createElement('div')
    button.id = this.options.name
    this.setStyle(button, this.styles.getStyle('button'))


    button.onmouseover = () => { this.styles.mouseover(this.options.name) }
    button.onmouseout = () => { this.styles.mouseout(this.options.name) }
    
    let buttonText = document.createTextNode(this.options.text);
    button.appendChild(buttonText);

    button.onclick = this.options.onclick

    return button
  } 
  
  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
