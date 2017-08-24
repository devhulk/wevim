export default class searchBarStyles {
  constructor() {
    this.styles = {
      container: {
      },
      searchBar: {
      height: '60px',
      fontSize: '25px',
      display: 'inline-block',
      fontFamily: 'Lato',
      fontWeight: '100',      
      border: 'none',
      outline: 'none',
      color: '#FFFFFF',
      padding: '3px',
      paddingRight: '60px',
      width: '0px',
      position: 'absolute',
      top: '0',
      right: '200px',
      background: 'none',
      zIndex: '3',
      transition: 'width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000)',
      cursor: 'pointer',
      opacity: '0.8'
      },
      searchBarButton: {
        width: '20',
        position: 'relative',
        top: '1px',
        left: '925px',
        zIndex: '1',
        cursor: 'pointer',
        opacity: '0.4',
        cursor: 'pointer',
        transition: 'opacity .4s ease'
}
    }
  } 
  
  focus(name) {
    let searchBar = document.getElementById(name)
    searchBar.style.width = '400px'
    searchBar.style.borderBottom = '1px solid #FFFFFF'
    searchBar.style.cursor = 'text'
  }

  onblur(name) {
    let searchBar = document.getElementById(name)
    searchBar.style.width = '0px'
    searchBar.style.borderBottom = 'none'
    searchBar.style.cursor = 'pointer'
  }

  mouseover(name) {
    let component = document.getElementById(name)
    component.style.color = '#00BBD8'
    component.style.textDecoration  = 'underline'
    component.style.textDecorationColor  = '#00BBD8'
    component.style.fontWeight = 'bold'
  }

  mouseout(name) {
    let component = document.getElementById(name)
    component.style.color = '#FFFFFF'
    component.style.textDecoration  = 'none'
    component.style.textDecorationColor  = '#FFFFFF'
    component.style.fontWeight = 'normal'
  }

  getStyle(name) {
    return(this.styles[name])
  }

}

