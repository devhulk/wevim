export default class OptionItemStyles {
  constructor() {
    this.styles = {
      optionItem: {
        borderColor: '#00BBD8',
        background: 'rgba(0, 0, 0, 0.4)',
        cursor: 'pointer',
        height: '100px',
        marginTop: '5px'
      },
      optionItemHeader: {
      },
      optionItemHeaderText: {
        color: '#FFFFFF',
        display: 'block',
        margin: 'auto',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '24px',
        width: '100%'
      },
      optionItemHeaderTextHighlight: {
        color: '#00BBD8'
      },
      optionItemFooter: {
      },
      optionItemFooterText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: '20px',
        width: '100%'
      },
      optionItemContent: {
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

