export default class AppNavStyles {
  constructor() {
    this.styles = {
      container: {
      },
      title: {
      },
      searchBar: {
      },
      menuRow: {
      },
      menuIcon: {
        color: '#FFFFFF'
      },
      menu: {
        height: '0',
        width: '0',
        position: 'fixed',
        zIndex: '1',
        top: '0',
        left: '0',
        background: 'rgba(0, 0, 0, 0.8)',
        overflowX: 'hidden',
        transition: '0.5s',
        paddingTop: '60px',
        textAlign: 'center'
      }
    }
  } 

  getStyle(name) {
    return(this.styles[name])
  }
}
