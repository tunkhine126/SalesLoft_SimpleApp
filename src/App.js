import React, { Component } from 'react';
import './App.css';
import People from './components/people'

const url = 'https://api.salesloft.com/v2/people'
const key = process.env.REACT_APP_SIMPLEAPP_API_KEY
const proxyurl = "https://cors-anywhere.herokuapp.com/"

class App extends Component {

  state = {
    allPeople: [],
    button: false
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
      .then(res => this.setState({ allPeople: res })
      )
    }

  render() {
    return (
      <div className="App">
        <h1>SalesLoft People Records</h1>
          <button>A BUTTON</button>
        <People allPeople={this.state.allPeople}/>
      </div>
    );
  }
}

export default App;
