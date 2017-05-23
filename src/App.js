import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import store from './store/configureStore';
import Header from './components/Header';
import WeatherList from './components/WeatherList';
import City from './components/City';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <City/>
          <WeatherList/>
        </div>
      </Router>
    );
  }

}


const AppWithStore = (props) => {
  return (
    <Provider store={store} >
      <App/>
    </Provider>
  );
}


export default AppWithStore;