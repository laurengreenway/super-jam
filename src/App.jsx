/* globals window */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import InfoCard from './components/InfoCard'
import SkaterPage from './components/SkaterPage'
import Timer from './components/Timer'
import Nav from './components/Nav'
import { Wrapper, List } from './components/StyledComponents'

class App extends Component {
  constructor() {
    super()
    this.state = {
      skaters: [],
      skater1: null,
      skater2: null
    }
  }
  componentDidMount() {
    axios.get('/skaters').then(res => {
      const skaters = res.data.payload
      this.setState({ skaters })
    })
  }

  setSkater = skater => {
    console.log(skater)
    const { skater1, skater2 } = this.state
    if (skater1 === null) {
      this.setState({
        skater1: skater
      })
    }
    if (skater1 && skater2 === null) {
      this.setState({
        skater2: skater
      })
    }
    if (skater1 && skater2) {
      window.alert('reset the jam and try again')
    }
  }

  resetSkater = () => {
    this.setState({
      skater1: null,
      skater2: null
    })
  }

  render() {
    const { skaters, skater1, skater2 } = this.state
    return (
      <Router>
        <Wrapper className="App">
          <Nav />
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <div />
              }}
            />
            <Route
              exact
              path="/timer"
              render={() => {
                return (
                  <div>
                    <Timer
                      skater1={skater1}
                      skater2={skater2}
                      resetSkater={this.resetSkater}
                    />
                    <List>
                      {skaters.map(skater => (
                        <InfoCard
                          handleClick={this.setSkater}
                          key={skater._id}
                          data={skater}
                        />
                      ))}
                    </List>
                  </div>
                )
              }}
            />
            <Route
              exact
              path="/skaters"
              render={props => {
                return (
                  <List>
                    {skaters.map(skater => (
                      <InfoCard
                        handleClick={() =>
                          props.history.push(`/skaters/${skater._id}`)
                        }
                        key={skater._id}
                        data={skater}
                      />
                    ))}
                  </List>
                )
              }}
            />
            <Route
              path="/skaters/:id"
              render={props => {
                const { id } = props.match.params
                const skater = skaters.find(s => {
                  return s._id === id
                })
                console.log(skater)
                return <SkaterPage skater={skater} />
              }}
            />
          </Switch>
        </Wrapper>
      </Router>
    )
  }
}

export default App
