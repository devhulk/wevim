import SearchBarStyles from './styles/search-bar-styles'

export default class SearchBar {
  constructor (options, data) {
    this.options = options
    this.styles = new SearchBarStyles()
    this.data = data
  } 

  getContent() {
    let container = document.createElement('div')
    this.setStyle(container, this.styles.getStyle('container'))
    // Create SearchBar  
    // <input id="filter" type="text" placeholder="Search" />
    // <i id="filtersubmit" class="fa fa-search"></i>
    //
    let searchBar = document.createElement('input')
    searchBar.type = 'text'
    searchBar.id = 'searchBar'
    searchBar.placeholder = 'What are you looking for?'

    this.setStyle(searchBar, this.styles.getStyle('searchBar'))
    
    let searchBarButton = document.createElement('i')
    searchBarButton.type = 'submit'
    searchBarButton.id = 'searchSubmit'
    searchBarButton.value = 'rechercher'
    searchBarButton.classList.add('fa')
    searchBarButton.classList.add('fa-2x')
    searchBarButton.classList.add('fa-search')
    container.appendChild(searchBarButton)

    this.setStyle(searchBarButton, this.styles.getStyle('searchBarButton'))

    searchBar.onfocus = () => { this.styles.focus('searchBar') }
    searchBar.onblur = () => { this.styles.onblur('searchBar') } 
    container.appendChild(searchBar)

    return container
  }
    
  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
