
export default class Visualization {
  constructor (options, data) {
    this.options = options
    this.data = data
  } 

  getContent() {

    let visualization = document.createElement('svg')
    visualization.id = 'visualization'

    let w = 300
    let h = 100

    let padding = 2
    let dataset = [5,10,14,20,11]

    let svg = d3.select(visualization).append('svg')
                .attr('width',w)
                .attr('height',h)

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d,i) => {
        return i * (w/ dataset.length)


      })
      .attr('y', (d) => {
        return h - (d)


      })
      .attr('width', w/ dataset.length - padding)
      .attr('height', (d) => {
        return d

      })
    return visualization

  } 

}
