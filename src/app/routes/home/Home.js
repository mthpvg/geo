import React from 'react'


export default class Home extends React.Component {

  constructor() {
    super()
    this.mark = this.mark.bind(this)
    this.state = {
      fetching: false,
      position: null
    }
  }

  componentDidMount() {
  }


  mark() {
    if (!('geolocation' in navigator)) return console.error('No geolocation')
    this.setState({fetching: true})
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
      this.setState({
        fetching: false,
        position: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy
        }
      })
    })
  }

  render() {
    let position = 'position unknown'
    console.log(this.state.position)
    if (this.state.position) {
      const latitude = `Latitude: ${this.state.position.latitude}`
      const longitude = `longitude: ${this.state.position.longitude}`
      const accuracy = `accuracy: ${this.state.position.accuracy}`
      position = `${latitude}, ${longitude}, ${accuracy}`
    } 

    return <div>
      <button onClick={this.mark}>Mark</button>
      <div>{this.state.fetching ? 'Loading please wait...' : position}</div>
    </div>
  }
}
