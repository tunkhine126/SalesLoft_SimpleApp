import React, { Component } from 'react';
import './App.css';
import People from './components/people'
import FrequencyTable from './components/frequencyTable'
import PageButtons from './components/pageButtons'
import FrequencyButton from './components/frequencyButton'
import ReactLoading from 'react-loading';

const url = 'https://api.salesloft.com/v2/people'
const key = process.env.REACT_APP_SIMPLEAPP_API_KEY
const proxyurl = "https://cors-anywhere.herokuapp.com/"

class App extends Component {

  // initial state
  state = {
    loading: true,
    buttonToggle: false,

    allPeople: [],
    page: 1,
    next_page: null,
    per_page: 25,
  }

  // fetching SalesLoft API 
  componentDidMount() {
    this.fetchPeople()
  }

  fetchPeople = (pageNum = 1, per_page = this.state.per_page) => {
    const full_url = [
      proxyurl + url,
      `?page=${pageNum}`,
      `&per_page=${per_page}`,
      "&sorting=created_at"
    ].join('')

    fetch(full_url, {
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': "application/json",
        'Accept': "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          this.setState({
            loading: false,
            allPeople: res,
            page: res.metadata.paging.current_page,
            next_page: res.metadata.paging.next_page,
            per_page: res.metadata.paging.per_page
          })
        }
      })
    }

  // toggle frequency button function
  displayFrequency = () => {
    this.setState(prevState => ({buttonToggle: !prevState.buttonToggle}))
  }
  
  render() {

    const ButtonToggle = this.state.buttonToggle
    const Loading = this.state.loading

    return (
      <div className="App">
        { Loading ? (
          <div>
            <ReactLoading type={"bars"} color={"grey"} />
          </div>
          ) : (
          <div>
            <img className="banner" src='https://1d9jx8pre4-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/brand-page-tabs_logo-1.png' alt="Logo" />
              {<div className="button-container" id="buttons">
                <PageButtons 
                  page={this.state.page} 
                  nextPage={this.state.next_page} 
                  perPage={this.state.per_page} 
                  loading={this.state.loading} 
                  fetchPeople={this.fetchPeople}
                />
                <FrequencyButton display={this.displayFrequency}/>
              </div>} 
              {ButtonToggle ? <FrequencyTable allPeople={this.state.allPeople} /> : null}
            <People allPeople={this.state.allPeople} />
          </div>
         )}
      </div>
    );
  }
}

export default App;
