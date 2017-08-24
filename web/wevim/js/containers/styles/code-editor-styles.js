export default class CodeEditorStyle {
  constructor() {
    this.styles = {
      container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: 'url("")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
      }
    }
  } 

  getStyle(name) {
    return(this.styles[name])
  }
}
