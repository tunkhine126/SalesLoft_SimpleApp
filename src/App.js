import React, { Component } from 'react';
import './App.css';
import People from './components/people'
import FrequencyTable from './components/frequencyTable'
import { Button } from 'react-bootstrap'
import ReactLoading from 'react-loading';

const url = 'https://api.salesloft.com/v2/people'
const key = process.env.REACT_APP_SIMPLEAPP_API_KEY
const proxyurl = "https://cors-anywhere.herokuapp.com/"

class App extends Component {

  // initial state
  state = {
    allPeople: [],
    buttonToggle: false,
    loading: true,
    displyFrequencyTable: false,
  }

  // fetching SalesLoft API 
  componentDidMount() {

    fetch(proxyurl + url, {
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': "application/json",
        'Accept': "application/json"
      }
    })
    .then(res => res.json())
    .then(res => this.setState({ 
      allPeople: res, 
      loading: false 
    })
    )
  }

  // toggle frequency button function
  displayFrequency = () => {
    this.setState(prevState => ({buttonToggle: !prevState.buttonToggle}))
  }

  // displayFrequencyButton = () => {
  //   return(
  //     <div className="button" id="button">
  //       <Button onClick={() => this.displayFrequency()} variant="secondary" size="sm" className="button">Display Frequency Count</Button>
  //     </div>
  //   )
  // }

  // displayFrequencyTable = () => {
  //   return (
  //     <People allPeople={this.state.allPeople} />
  //   )
  // }

  // getTables = () => {
  //   if(this.state.loading)
  //     return (
  //       <div>
  //         <ReactLoading className="loading" type="spokes" color="#2897D3" width="15%" />
  //       </div>
  //     )
  //   else
  //     return (
  //       <div>
  //         {this.displayFrequencyButton()}
  //         {this.displayFrequencyTable()}
  //       </div>
  //     )
  // }
  
  render() {
    return (
      <div className="App">
        { this.state.loading ? (
          <div>
            <ReactLoading className="loader" type={"bars"} color={"grey"} />
            Loading!
          </div>
        ) : (
          <div>
            <img className="banner" src='https://1d9jx8pre4-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/brand-page-tabs_logo-1.png' alt="Logo" />
              {<div className="button" id="button">
                <Button onClick={() => this.displayFrequency()} variant="secondary" size="sm" className="button">Display Frequency Count</Button>
              </div>} <br />
                {this.state.buttonToggle ? <FrequencyTable allPeople={this.state.allPeople} /> : null}
              <People allPeople={this.state.allPeople} />
          </div>
         )}
      </div>
    );
  }
}

export default App;
