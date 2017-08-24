export default class LoginStyles {
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
      loginForm: {
        width: '500px',
        height: '400px',
        opacity: '0',
        margin: 'auto',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '10px',
        position: 'absolute'
      },
      title: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '24px'
      },
      username: {
        marginTop: '150px',
      },
      password: {
        marginTop: '15px',
      },
      inputFields: {
        color: '#FFFFFF',
        width: '100%',
        height: '35px',
        border: '1px  #c7d0d2',
        borderRadius: '2px'
      },
      loginButton: {
        width: '48px',
        height: '48px',
        width: '40%',
        margin: 'auto'
      },
      loginButtonContainer:{
        position: 'absolute',
        right: '0px',
        width: '300px',
        padding: '10px',

      }
    }
  } 

  getStyle(name) {
    return(this.styles[name])
  }
}
