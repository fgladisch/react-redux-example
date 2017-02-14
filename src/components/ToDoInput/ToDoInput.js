import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ToDoInput.css'

import * as toDos from '../../actions/ToDoActions'

export class ToDoInputComponent extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.add = this.add.bind(this)
  }

  handleChange(event) {
    toDos.updateInput(event.target.value)
  }

  add() {
    if (this.props.input) {
      toDos.addToDo()
      toDos.updateInput('')
    }
  }

  render() {
    return (
      <div className="ToDoInput">
        <input type="text" name="todo" placeholder="Enter a To Do..." onChange={this.handleChange} value={this.props.input} />
        <button type="button" onClick={this.add}>Add</button>
      </div>
    )
  }

}

export const ToDoInput = connect((store) => {
  return {
    input: store.toDos.input
  }
})(ToDoInputComponent)
