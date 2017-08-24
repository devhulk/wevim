import CodeEditorStyles from './styles/code-editor-styles'
import AppNav from './app-nav'

export default class CodeEditor {
  constructor (view) {
    this.view = view
    this.styles = new CodeEditorStyles()
  } 

  getData() {
    let promise = new Promise((resolve, reject) => {

      resolve({})
    })
    return promise
  }

  getContent() {
    let container = document.createElement('div')
    container.id = 'container'
    this.setStyle(container, this.styles.getStyle('container'))

    let ace = document.createElement('div')
    ace.id = 'editor'
    this.setStyle(ace, this.styles.getStyle('editor'))

    ace.innerHTML = 
`class WeVim {
  construnctor() {
    console.log('all the things')
  }
}

let wevim = new WeVim()
`

    container.appendChild(ace)

    return(container)
  }

  animate() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");

  }

  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
