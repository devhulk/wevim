import LoginStyles from './styles/login-styles'
import Button from '../components/button'

export default class Login {
  constructor (view) {
    this.view = view
    this.styles = new LoginStyles()
  } 

  getData() {
    let promise = new Promise((resolve, reject) => {
      let options = {
        "view": this.view,
        "model": pluralize(this.view.viewModel),
        "find": {}
      }

      window.particle.getData(options).then((data) => {
        resolve(data)
      })
    })

    return promise
  }

  getContent(data) {
    let container = document.createElement('div')
    container.id = 'container'
    this.setStyle(container, this.styles.getStyle('container'))

    let loginForm = document.createElement('div')
    loginForm.id = 'loginForm'
    this.setStyle(loginForm, this.styles.getStyle('loginForm'))

    let username = document.createElement('input')
    username.placeholder = 'USERNAME'
    username.id = 'username'
    this.setStyle(username, this.styles.getStyle('inputFields'))
    this.setStyle(username, this.styles.getStyle('username'))
    loginForm.appendChild(username)

    let password = document.createElement('input')
    password.placeholder = 'PASSWORD'
    password.type = 'password'
    this.setStyle(password, this.styles.getStyle('inputFields'))
    this.setStyle(password, this.styles.getStyle('password'))
    loginForm.appendChild(password)

    
    let loginButtonContainer = document.createElement('div')
    loginButtonContainer.id = 'loginButtonContainer'
    this.setStyle(loginButtonContainer, this.styles.getStyle('loginButtonContainer'))
    let loginButtonOptions = {
      text: "LOGIN",
      name: "loginButton",
      onclick: () => {
        window.particle.switchView('CodeEditor')
      }
    }

    let loginButton = new Button(loginButtonOptions)
    loginButtonContainer.appendChild(loginButton.getContent())
    loginForm.appendChild(loginButtonContainer)

    container.appendChild(loginForm)

    return(container)
  }

  animate() {
    particlesJS("container", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#FFFFFF"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#FFFFFF",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

    let loginForm = document.getElementById("loginForm");
    let opacity = 0
    let interval = setInterval(() => {
      if (opacity >= 0.8) {
        clearInterval(interval);
      } else {
        opacity += .05
        loginForm.style.opacity = opacity
      }
    }, 100)
  }

  setStyle(container, style) {
    Object.keys(style).forEach((styleProperty) => {
      container.style[styleProperty] = style[styleProperty]
    })
  }
}
