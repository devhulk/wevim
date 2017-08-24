import AppNavStyles from './styles/app-nav-styles'
import NavItem from '../components/nav-item'
import SearchBar from '../components/search-bar'

export default class AppNav {
  constructor (options, data) {
    this.option = options
    this.data = data
    this.styles = new AppNavStyles()
    window.particle.appNav = this
  } 

  getContent() {
    let container = document.createElement('div')
    this.setStyle(container, this.styles.getStyle('container'))

    let menuRow = document.createElement('div')
    menuRow.id = 'menuRow'
    menuRow.classList.add('row')
    this.setStyle(menuRow, this.styles.getStyle('menuRow'))

    let menuIcon = document.createElement('i')
    menuIcon.classList.add('fa')
    menuIcon.classList.add('fa-th')
    menuIcon.classList.add('fa-3x')
    menuIcon.classList.add('col-2')
    this.setStyle(menuIcon, this.styles.getStyle('menuIcon'))
    menuIcon.onclick = () => window.particle.appNav.openNav()
    menuRow.appendChild(menuIcon)

    /*
    let menuButton = document.createElement('img')
    menuButton.id = 'menuButton'
    menuButton.src = '/images/menu.png'
    this.setStyle(menuButton, this.styles.getStyle('menuButton'))
    menuButton.setAttribute('onclick', 'window.particle.appNav.openNav()')
    menuButton.classList.add('col-2')
    menuRow.appendChild(menuButton)
    */

    /*
    let searchBar = new SearchBar()
    let searchBarContent = searchBar.getContent()
    this.setStyle(searchBarContent, this.styles.getStyle('searchBar'))
    searchBarContent.classList.add('col-10')
    menuRow.appendChild(searchBarContent)
    */

    container.appendChild(menuRow)

    let menu = document.createElement('div')
    menu.id = 'menu'

    let closeNavItem = new NavItem({}, {
      "name": "",
      "description": "Close Nav",
      "link": window.particle.currentView.name,
      "icon": "fa-times"
    })

    menu.appendChild(closeNavItem.getContent())

    this.data.forEach((item) => {
      let navItem = new NavItem({}, item)
      menu.appendChild(navItem.getContent())
    })

    this.setStyle(menu, this.styles.getStyle('menu'))

    container.appendChild(menu)


    return(container)
  }

  openNav() {
    let menu = document.getElementById('menu');
    menu.style.width = "100%"
    menu.style.height = "100%"
  }

  animate() {
  }

  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
