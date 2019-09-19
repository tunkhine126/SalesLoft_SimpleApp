import React, { Component } from 'react'
// import Persons from './persons'

const url = 'https://api.salesloft.com/v2/people'
const key = process.env.REACT_APP_SIMPLEAPP_API_KEY
const proxyurl = "https://cors-anywhere.herokuapp.com/"

class People extends Component {
  state = { 
    people: []
  }

  componentDidMount(){
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
    let persons = this.state.people ? this.state.people : null

    return (
      <div>
        HEllO WORLD
        <div className="persons">
          {console.log(persons.data)}
         {persons.data ? persons.data.map(person => { 
           return (<div><h2>Name: {person.display_name}</h2>
           <h3>Email: {person.email_address}</h3>
           <h4> Job title: {person.title}</h4>
           </div>)
         }) : null}
        </div>
      </div>
    )
  }
}

export default People;