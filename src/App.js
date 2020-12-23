import React, { Component } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import './index.css'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className='grid-container'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
