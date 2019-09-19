import React, { Component } from 'react';
import './App.css';
import People from './components/people'
import FrequencyTable from './components/frequencyTable'
import { Button } from 'react-bootstrap'

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
    }
  
  render() {
    return (
      <div className="App">
        <h1>SalesLoft</h1>
          <div className="button">
          <Button onClick={() => this.displayFrequency()} variant="secondary" className="button">Frequency Count</Button>
           </div><br />
          {this.state.buttonToggle ? <FrequencyTable allPeople={this.state.allPeople}/> : null}
        <People allPeople={this.state.allPeople}/>
      </div>
    );
  }
}

export default App;
