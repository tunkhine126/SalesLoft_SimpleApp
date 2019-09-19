import React, { Component } from 'react';
import './App.css';
import People from './components/people'
import FrequencyCount from './components/frequencyCount'

const url = 'https://api.salesloft.com/v2/people'
const key = process.env.REACT_APP_SIMPLEAPP_API_KEY
const proxyurl = "https://cors-anywhere.herokuapp.com/"

class App extends Component {

// initial state
  state = {
    allPeople: [],
    buttonToggle: false
  }

  // fetching SalesLoft API 
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

    // toggle frequency button function
    displayFrequency = () => {
      this.setState(prevState => ({buttonToggle: !prevState.buttonToggle}))
      console.log(this.state.buttonToggle)
    }
  
  render() {
    return (
      <div className="App">
        <h1>SalesLoft People Records</h1>
          <div className="button">
            <button onClick={() => this.displayFrequency()}>Frequency</button>
            </div>
          {this.state.buttonToggle ? <FrequencyCount /> : null}
        <People allPeople={this.state.allPeople}/>
      </div>
    );
  }
}

export default App;
