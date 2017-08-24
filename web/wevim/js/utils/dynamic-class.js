import Button from '../components/button'
import TextField from '../components/text-field'
import Card from '../components/card'
import LightControl from '../components/light-control'
import NavItem from '../components/nav-item'
import CodeEditor from '../containers/code-editor'
import Login from '../containers/login'
import Login from '../containers/login'
import AppNav from '../containers/app-nav'

// Use ES6 Object Literal Property Value Shorthand to maintain a map
// where the keys share the same names as the classes themselves
const classes = {
  Button,
  TextField,
  Card,
  LightControl,
  NavItem,
  CodeEditor,
  Login,
  Login,
  AppNav
}

class DynamicClass {
  constructor (className, options) {
    return new classes[className](options)
  }
}

export default DynamicClass
