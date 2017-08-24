import Login from './containers/login'
import DynamicClass from './utils/dynamic-class'

export default class Particle {
  constructor() {
    document.body.style.background = '#000000'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'

    // Prevent items on the screen from having that weird blue selection outline (esp. on login page)
    window.onload = function(){
      document.onselectstart = function() {
        return false;
      }
    }
  }

  getViews() {
    let promise = new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      request.open("POST", "http://localhost:4000/list/appDetails")
      request.setRequestHeader('token', '3c0f44197e10e2cb4a2e0fe749b88d03')
      request.setRequestHeader("Content-type", "application/json")
      let options = {find : {type: 'View'}}
      request.onload = () => {
        let viewData = JSON.parse(request.responseText)

        // Find default view and populate views object
        let defaultView = null
        let views = {}

        viewData.forEach((view) => {
          if(view.isDefault === 'true') {
            defaultView = view
          }
          views[view.name] = view
        })

        window.particle.views = views
        
        resolve(defaultView)
      }
      request.onerror = () => { 
        let status = JSON.parse(request.statusText)
        reject(status)
      }
      request.send(JSON.stringify(options))
    })

    return promise
  }

  getData(options) {
    let promise = new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      let endPoint = `http://localhost:4000/list/${options.model}`

      request.open("POST", endPoint)
      request.setRequestHeader('token', '3c0f44197e10e2cb4a2e0fe749b88d03')
      request.setRequestHeader("Content-type", "application/json")
      request.onload = () => {
        let data = JSON.parse(request.responseText)
        resolve(data)
      }
      request.onerror = () => { 
        let status = JSON.parse(request.statusText)
        reject(status)
      }
      request.send(JSON.stringify(options))
    })

    return promise
  }

  updateData(options) {
    let promise = new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      let endPoint = `http://localhost:4000/update/${options.model}`


      request.open("POST", endPoint)
      request.setRequestHeader('token', '3c0f44197e10e2cb4a2e0fe749b88d03')
      request.setRequestHeader("Content-type", "application/json")

      request.onload = () => {
        let data = JSON.parse(request.responseText)
        resolve(data)
      }

      request.onerror = () => { 
        let status = JSON.parse(request.statusText)
        reject(status)
      }

      request.send(JSON.stringify(options))

    })

    return promise
  }

  createData(options) {
    let promise = new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      let endPoint = `http://localhost:4000/create/${options.model}`


      request.open("POST", endPoint)
      request.setRequestHeader('token', '3c0f44197e10e2cb4a2e0fe749b88d03')
      request.setRequestHeader("Content-type", "application/json")

      request.onload = () => {
        let data = JSON.parse(request.responseText)
        resolve(data)
      }

      request.onerror = () => { 
        let status = JSON.parse(request.statusText)
        reject(status)
      }

      request.send(JSON.stringify(options))

    })

    return promise
  }

  switchView(name) {
    let view = this.views[name]
    let content = document.getElementById('content')
    window.particle.currentView = view

    let container = new DynamicClass(view.name, view)
    container.getData().then((data) => {
      content.innerHTML = ''
      content.appendChild(container.getContent(data))
      container.animate()
    })
  } 

}

let particle = new Particle()
window.particle = particle
particle.getViews().then((defaultView) => {
  particle.currentView = defaultView
  particle.switchView(defaultView.name)
})
