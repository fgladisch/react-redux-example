import React, { Component } from 'react'
import { connect } from 'react-redux'
import './NameInput.css'

import * as names from '../../actions/NameActions'

export class NameInputComponent extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.push = this.push.bind(this)
  }

  handleChange(event) {
    names.updateInput(event.target.value)
  }

  push() {
    if (this.props.input) {
      names.addName()
      names.updateInput('')
    }
  }

  render() {
    return (
      <div className="NameInput">
        <input type="text" name="name" placeholder="Enter a name..." onChange={this.handleChange} value={this.props.input} />
        <button type="button" onClick={this.push}>Push</button>
      </div>
    )
  }

}

export const NameInput = connect((store) => {
  return {
    input: store.names.input
  }
})(NameInputComponent)
