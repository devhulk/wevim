export default class NumberFieldStyles {
    constructor() {
      this.styles = {
        hide: {
          display: 'none'
        },
        show: {
          display: 'block'
        },
        numberField: {
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

    keydown(name, event) {
        let textInput = document.getElementById(name)
        var key = event.keyCode ? event.keyCode : event.which
        if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
            (key == 65 && ( e.ctrlKey || event.metaKey  ) ) || 
            (key >= 35 && key <= 40) ||
            (key >= 48 && key <= 57 && !(event.shiftKey || event.altKey)) ||
            (key >= 96 && key <= 105)
          )) e.preventDefault();
    }
  
    getStyle(name) {
      return(this.styles[name])
    }
  
  }
  
  
