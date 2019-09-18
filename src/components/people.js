import React, { Component } from 'react'

const url = 'https://api.salesloft.com/v2/people'
const key = process.env.REACT_APP_SIMPLEAPP_API_KEY
const proxyurl = "https://cors-anywhere.herokuapp.com/"

class People extends Component {
  state = { 
    people: []
  }

  componentDidMount() {
    fetch(proxyurl + url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
      }
    })
    .then(res => res.json())
    .then(res => this.setState({people: res})
    )
  }


  render() {
    console.log(key)
    return (
      <div>
        HEllO WORLD
      </div>
    )
  }
}

export default People;