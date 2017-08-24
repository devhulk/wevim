export default class NavItemStyles {
  constructor() {
    this.styles = {
      navItem: {
        float: 'left',
        display: 'block',
        cursor: 'pointer',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        fontSize: '17px'
      },
      navItemSelected: {
        textShadow: '1px 1px 1px #00BBD8'
      },
      navText: {
        marginTop: '5px',
        fontFamily: 'Helvetica',
        fontSize: '17px'
      }
    }
  } 
  getStyle(name) {
    return(this.styles[name])
  }

}

