export default class LightControlStyles {
  constructor() {
    this.styles = {
      title: {
      },
      hide: {
        display: 'none'
      },
      show: {
        display: 'block'
      },
      lightControl: {
        display: 'none'
      },
      row: {
        margin: '4%',
        top: '40px'
      },
      onButton: {
        top: '50%'
      },
      offButton: {
        marginLeft: '100px',
        marginTop: '-52px'
      }
    }
  } 

  getStyle(name) {
    return(this.styles[name])
  }

}

