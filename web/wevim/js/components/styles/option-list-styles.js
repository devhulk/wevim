export default class OptionListStyles {
  constructor() {
    this.styles = {
      optionList: {
      },
      itemContainer: {
        backgroundColor: '#ccc',
        height: '100px',
        marginTop: '5px'
      },
      itemList: {
        overflowY: 'scroll',
        height: '400px',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      },
      row: {
      }
    }
  } 

  getStyle(name) {
    return(this.styles[name])
  }
}
