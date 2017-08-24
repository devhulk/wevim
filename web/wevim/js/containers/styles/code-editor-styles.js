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
      },
      editor: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  } 

  getStyle(name) {
    return(this.styles[name])
  }
}
