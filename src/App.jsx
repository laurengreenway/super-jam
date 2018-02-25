import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  // eslint-disable-next-line
  constructor() {
    super()
  }
  componentDidMount() {
    console.log('component did mount!')
    axios.get('/')
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to SuperJam 💫</h1>
      </div>
    )
  }
}

export default App
