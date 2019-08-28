import React, { Component } from 'react';
import './App.css';
import UsingClass from './app/appClass'
import UsingHooks from './app/appHooks'

export default class app extends Component {
  render() {
    return(
      <>
      <div className="main">
        <div className="hooks_main">
          <h3>UsingHooks</h3>
          <UsingHooks />
        </div>
        <div className = "class_main">
          <h3>UsingClass</h3>
          <UsingClass />
        </div>
      </div>
      </>
    )
  }

}