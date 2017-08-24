import NavItemStyles from './styles/nav-item-styles'

export default class NavItem {
  constructor (options, data) {
    this.options = options
    this.styles = new NavItemStyles()
    this.data = data
  } 

  getContent() {
    // Create NavItem
    let navItem = document.createElement('div')
    this.setStyle(navItem, this.styles.getStyle('navItem'))
    
    let navIcon = document.createElement('i')
    navIcon.classList.add('fa')
    navIcon.classList.add('fa-3x')

    if(this.data.link === window.particle.currentView.name && this.data.description != 'Close Nav') {
      this.setStyle(navItem, this.styles.getStyle('navItemSelected'))
    }

    navIcon.classList.add(this.data.icon)
    let navText = document.createElement('div')
    navText.appendChild(document.createTextNode(this.data.name))
    this.setStyle(navText, this.styles.getStyle('navText'))
    navIcon.appendChild(navText)

    navIcon.setAttribute('onclick', `window.particle.switchView('${this.data.link}')`)
    navItem.appendChild(navIcon)
    
    return navItem
  } 
  
  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
