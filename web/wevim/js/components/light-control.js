import LightControlStyles from './styles/light-control-styles'
import Button from '../components/button'

export default class LightControl {
  constructor (config) {
    this.options = config.options
    this.data = config.data
    this.styles = new LightControlStyles()

    /*
    * Setup
    */

    //1. specify domain and port of your socket.io server
    var socket = io.connect('http://138.197.66.12:5040');

    //2. Setup socket handler for receiving message
    //   once message recived, change state of this website
    socket.on('response', (data) => {
      console.log(data.message)
    })

    //3. Setup function to emit messages
    //   this message is broadcasted to your client.js via server.js
    //   this function is called by onclick on <button>
    this.led = (command) => {
      socket.emit('led', {command:command});
    }


    /*
    * Socket connection controller
    * buttons are disabled when socket is disconnected
    */
    socket.on('connect', () => {
      console.log('Connected')
    })

    socket.on('disconnect', (client) => {
      console.log('Disconnected')
    })
  } 

  getContent() {
    // Create LightControl
    let lightControl = document.createElement('div')
    lightControl.id = 'lightControl'
    lightControl.classList.add('col-4')
    this.setStyle(lightControl, this.styles.getStyle('lightControl'))
    if(this.options.isDefault) {
      this.setStyle(lightControl, this.styles.getStyle('show'))
    }

    let buttonContainer = document.createElement('div')
    buttonContainer.classList.add('col-4')

    let onButtonOptions = {
      text: "ON",
      name: "onButton",
      onclick: () => {
        console.log('On button clicked')
        this.led('on')
        document.getElementById('onButton').style.backgroundColor = '#00BBD8'
        document.getElementById('offButton').style.backgroundColor = ''
      }
    }

    let onButton = new Button(onButtonOptions)
    buttonContainer.appendChild(onButton.getContent())

    let offButtonOptions = {
      text: "OFF",
      name: "offButton",
      onclick: () => {
        console.log('Off button clicked')
        this.led('off') 
        document.getElementById('offButton').style.backgroundColor = '#00BBD8'
        document.getElementById('onButton').style.backgroundColor = ''
      }
    }

    let offButtonContent = new Button(offButtonOptions).getContent()
    this.setStyle(offButtonContent, this.styles.getStyle('offButton'))
    buttonContainer.appendChild(offButtonContent)

    let row = document.createElement('div')
    row.id = 'row'
    row.classList.add('row')
    this.setStyle(row,this.styles.getStyle('row'))

    row.appendChild(buttonContainer)

    lightControl.appendChild(row)

    return lightControl
  } 

  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
