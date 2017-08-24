import OptionListStyles from './styles/option-list-styles'
import DynamicClass from '../utils/dynamic-class'
import Card from '../components/card'
import OptionItem from '../components/option-item'

export default class OptionList {
  constructor (config) {
    this.options = config.options
    this.data = config.data
    this.styles = new OptionListStyles()
  } 

  getContent() {

    let optionList = document.createElement('div')
    optionList.id = 'optionList'
    this.setStyle(optionList, this.styles.getStyle('optionList'))

    let row = document.createElement('div')
    row.id = 'row'
    row.classList.add('row')
    this.setStyle(row,this.styles.getStyle('row'))

    let itemList = document.createElement('div')
    itemList.classList.add('col-4')
    this.setStyle(itemList, this.styles.getStyle('itemList'))

    this.options.view.viewItems.forEach((viewItem, index) => {

      let itemOptions = {
        viewItem: viewItem,
        showItem: (viewItem) => {
          this.showItem(viewItem)
        }
      }
      let optionItemContent = new OptionItem(itemOptions, this.data).getContent()
      if(index === 0) {
        optionItemContent.style.borderStyle = 'solid'
      }
      itemList.appendChild(optionItemContent)

    })

    row.appendChild(itemList)

    this.options.view.viewItems.forEach((viewItem, index) => {
      // Instantiate componentType
      let componentOptions = {
        viewItem: viewItem,
        data: this.data
      }
      if(index === 0) {
        componentOptions.isDefault = true
      }
      else {
        componentOptions.isDefault = false
      }

      let component = new DynamicClass(viewItem.componentType, {options: componentOptions, data: this.data})
      row.appendChild(component.getContent())
    })

    let cardOptions = {
      cardOptions: this.options.view.cardOptions,
      detailView: this.options.view,
      columnClass: 'col-4'
    }

    let card = new Card(cardOptions, this.data)
    row.appendChild(card.getContent())

    optionList.appendChild(row)

    return optionList

  }

  showItem(item) {
    this.options.view.viewItems.forEach((viewItem, index) => {
      if(viewItem.name === item.name) {
        document.getElementById(`${viewItem.name}Container`).style.display = 'block'
        document.getElementById(`${viewItem.name}OptionItem`).style.borderStyle = 'solid'
      }
      else {
        document.getElementById(`${viewItem.name}Container`).style.display = 'none'
        document.getElementById(`${viewItem.name}OptionItem`).style.borderStyle = 'none'
      }
    })
  }

  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
