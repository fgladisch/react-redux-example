import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ToDoList.css'

import * as toDos from '../../actions/ToDoActions'

class ToDoListComponent extends Component {

  constructor() {
    super()
    this.remove = this.remove.bind(this)
  }

  remove(text) {
    toDos.removeToDo(text)
  }

  generateEntries(toDos) {
    if (toDos.length > 0) {
      return toDos.map(text =>
        <div className="ToDoList-entry" onClick={() => this.remove(text)} key={text}>{text}</div>
      )
    }
    return (<div className="ToDoList-entry-empty">Empty</div>)
  }

  render() {
    return (
      <div className="ToDoList">{this.generateEntries(this.props.toDos)}</div>
    )
  }

}

export const ToDoList = connect((store) => {
  return {
    toDos: store.toDos.list
  }
})(ToDoListComponent)
