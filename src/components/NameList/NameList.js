import React, { Component } from 'react'
import { connect } from 'react-redux'
import './NameList.css'

class NameListComponent extends Component {

  generateEntries(names) {
    if (names.length > 0) {
      return names.map(name =>
        <div className="List-entry" key={name}>{name}</div>
      )
    }
    return (<div className="List-entry List-entry-empty">Empty</div>)
  }

  render() {
    return (
      <div className="List">{this.generateEntries(this.props.names)}</div>
    )
  }

}

export const List = connect((store) => {
  return {
    names: store.names.list
  }
})(NameListComponent)
