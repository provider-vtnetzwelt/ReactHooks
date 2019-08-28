import React, { Component } from 'react';
import './App.css';
import UsingBasic from './app/basic'
import UsingHooks from './app/usingHooks'
import UsingHOC from './app/usingHOC'

export default class app extends Component {
  render() {
    return(
      <>
      <div className="main">
      <div className="basic_">
          <h3>Using Basic</h3>
          <UsingBasic />
        </div>
        <div className="hoc_">
          <h3>Using HOC</h3>
          <UsingHOC />
        </div>
        <div className = "hooks_">
          <h3>Using Hooks</h3>
          <UsingHooks />
        </div>
      </div>
      </>
    )
  }

}