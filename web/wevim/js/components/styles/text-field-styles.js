export default class TextFieldStyles {
  constructor() {
    this.styles = {
      hide: {
        display: 'none'
      },
      show: {
        display: 'block'
      },
      textField: {
        display: 'none'
      },
      textInput: {
        color: '#FFFFFF',
        display: 'inherit',
        marginTop: '5px',
        fontFamily: 'Helvetica',
        fontSize: '17px',
        margin: '40px 25px',
        width: '200px',
        display: 'block',
        border: 'none',
        padding: '10px 0',
        borderBottom: 'solid 1px #FFFFFF',
        transition: 'all 0.3s cubic-bezier(.64,.09,.08,1)',
        backgroundColor: 'transparent',
        backgroundPosition: '-200px 0',
        backgroundSize: '200px 100%',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF'
      }
    }
  } 

  focus(name) {
    let textInput = document.getElementById(name)
    textInput.style.boxShadow = 'none'
    textInput.style.outline = 'none'
    textInput.style.backgroundPosition = '0 0'
    textInput.style.color = '#00BBD8'
    textInput.style.borderBottom = 'solid 2px #00BBD8'
  }
  onblur(name) {
    let textInput = document.getElementById(name)
    textInput.style.color = '#FFFFFF'
    textInput.style.borderBottom = 'solid 1px #FFFFFF'
  }

  mouseover(name) {
    let textInput = document.getElementById(name)
    textInput.style.borderBottom = 'solid 2px #00BBD8'
  }

  mouseout(name) {
    let textInput = document.getElementById(name)
    textInput.style.borderBottom = 'solid 1px #FFFFFF'
  }

  getStyle(name) {
    return(this.styles[name])
  }

}

