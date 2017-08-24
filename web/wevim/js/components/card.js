import CardStyles from './styles/card-styles'

export default class Card {
  constructor (options, item) {
    this.options = options
    this.styles = new CardStyles()
    this.item = item

    if(!this.options.cardOptions) {
      this.options.cardOptions = {
        cardHeader: {
          componentType: "Label",
          value: "item.name"
        },
        cardContent: {
          componentType: "Image",
          value: "item.imageUrl"
        },
        cardFooter: {
          componentType: "Label",
          value: "item.description"
        }
      }
    }
  } 

  getContent() {
    let item = this.item
    // Create Card
    let card = document.createElement('div')
    card.classList.add(this.options.columnClass)
    this.setStyle(card, this.styles.getStyle('card'))

    card.onmouseover = () => {
      // card.style.borderStyle = 'solid'
      this.setStyle(card, this.styles.getStyle('cardHighlight'))
      this.setStyle(cardHeaderText, this.styles.getStyle('cardHeaderTextHighlight'))
    }

    card.onmouseout = () => {
      // card.style.borderStyle = 'none'
      this.setStyle(card, this.styles.getStyle('card'))
      this.setStyle(cardHeaderText, this.styles.getStyle('cardHeaderText'))
    }
    
    // Create Card Header
    let cardHeader = document.createElement('div')
    this.setStyle(cardHeader, this.styles.getStyle('cardHeader'))

    // Create Card Header Text
    let cardHeaderText = document.createElement('div')
    cardHeaderText.appendChild(document.createTextNode(eval(this.options.cardOptions.cardHeader.value)))
    this.setStyle(cardHeaderText, this.styles.getStyle('cardHeaderText'))
    cardHeader.appendChild(cardHeaderText)

    card.appendChild(cardHeader)

    // Create Card Content
    let cardContent = null
    if(this.options.cardOptions.cardContent.componentType === 'Image') {
      cardContent = document.createElement('img')
      cardContent.src = eval(this.options.cardOptions.cardContent.value)
    }
    else {
      cardContent = document.createElement('div')
      this.setStyle(cardContent, this.styles.getStyle('cardContent'))

      // Create Card Content Text
      let cardContentText = document.createElement('div')
      cardContentText.appendChild(document.createTextNode(eval(this.options.cardOptions.cardContent.value)))
      this.setStyle(cardContentText, this.styles.getStyle('cardContentText'))
      cardContent.appendChild(cardContentText)
    }

    this.setStyle(cardContent, this.styles.getStyle('cardContent'))
    card.appendChild(cardContent)

    // Create Card Footer
    let cardFooter = document.createElement('div')
    this.setStyle(cardFooter, this.styles.getStyle('cardFooter'))

    // Create Card Footer Text
    let cardFooterText = document.createElement('div')
    cardFooterText.appendChild(document.createTextNode(eval(this.options.cardOptions.cardFooter.value)))
    this.setStyle(cardFooterText, this.styles.getStyle('cardFooterText'))
    cardFooter.appendChild(cardFooterText)

    card.appendChild(cardFooter)

    card.onclick = this.options.onclick

    return card
  } 
  
  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
