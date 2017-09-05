import React, { Component } from 'react'
import './ToDoInput.css'

import * as toDos from '../../actions/ToDoActions'

const DEFAULT_STATE = { value: '' }

export class ToDoInput extends Component {

  constructor(props) {
    super(props)
    this.add = this.add.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = DEFAULT_STATE
  }

  add() {
    if (this.state.value) {
      toDos.addToDo(this.state.value)
      this.resetState()
    }
  }

  handleChange(value) {
    this.setState({ value });
  }

  resetState() {
    this.setState(DEFAULT_STATE)
  }

  render() {
    return (
      <div className="ToDoInput">

        <input type="text"
               name="todo"
               placeholder="Enter a To Do..."
               onChange={(e) => this.handleChange(e.target.value)}
               value={this.state.value} />

        <button type="button" onClick={this.add}>Add</button>

      </div>
    )
  }

}
