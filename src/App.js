import React, { Component } from 'react';
import './App.css';
import Footer from './app/components/Footer';
import Header from './app/components/Header';
import Home from './app/pagers/Home';

class App extends Component {
  render() {
    return (
      <div className="App ">
      <Header/>
    <div className='content'>
    <Home/>
    </div>
      <Footer/>
      </div>
    );
  }
}

export default App;
