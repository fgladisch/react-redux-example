import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { ToDoList, ToDoInput } from './components'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-header-title">React + Redux</h1>
        </div>
        <div className="App-container">

          <ToDoInput />

          <h2>List of To Dos</h2>
          <ToDoList />

        </div>
      </div>
    )
  }
}
