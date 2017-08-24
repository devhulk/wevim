export default class ButtonStyles {
  constructor() {
    this.styles = {
      button: {
        float: 'left',
        display: 'block',
        cursor: 'pointer',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        fontSize: '17px',
        alignItems: 'center',
        display: 'flex',
        textTransform: 'uppercase',
        fontWeight: 'normal',
        border: 'solid 2px #00BBD8',
      }
    }
  } 

  mouseover(name) {
    let component = document.getElementById(name)
    //component.style.color = '#00BBD8'
    component.style.textDecoration  = 'underline'
    component.style.textDecorationColor  = '#00BBD8'
    component.style.fontWeight = 'bold'
  }

  mouseout(name) {
    let component = document.getElementById(name)
    //component.style.color = '#FFFFFF'
    component.style.textDecoration  = 'none'
    component.style.textDecorationColor  = '#FFFFFF'
    component.style.fontWeight = 'normal'
  }

  getStyle(name) {
    return(this.styles[name])
  }

}

