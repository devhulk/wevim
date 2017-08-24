export default class CardStyles {
  constructor() {
    this.styles = {
      card: {
        height: '400px',
        margin: '1%',
        cursor: 'pointer',
        boxShadow: '0px 0px 3px #888888',
        borderWidth: '2px',
        borderStyle: 'none',
        borderColor: '#00BBD8',
        background : 'rgba(0, 0, 0, 0.4)',
        borderradius: '25px',
      },
      cardHighlight: {
        borderStyle: 'solid'
      },
      cardHeader: {
        height: '10%'
      },
      cardHeaderText: {
        color: '#FFFFFF',
        display: 'block',
        margin: 'auto',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '24px',
        width: '100%',
      },
      cardHeaderTextHighlight: {
        color: '#00BBD8'
      },
      cardContent: {
      },
      cardContentText: {
        color: '#FFFFFF',
        display: 'block',
        margin: 'auto',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '24px',
        width: '100%',
      },
      cardFooter: {
        height: '10%'
      },
      cardFooterText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: '20px',
        width: '100%'
      },
      cardContent: {
        height: '80%',
        display: 'block',
        margin: 'auto'
      }
    }
  } 
  getStyle(name) {
    return(this.styles[name])
  }

}

