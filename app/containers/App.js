import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Details from '../components/Details'
import Player from '../components/Player'
import Progress from '../components/Progress'
import Search from '../components/Search'

export default class App extends Component {
  render() {
    return (
      <div>
      	<Search/>
      	<Details/>
      	<Player/>
      	<Progress/>
      </div>
    )
  }
}