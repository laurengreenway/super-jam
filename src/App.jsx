import React, { Component } from 'react'
import axios from 'axios'
import InfoCard from './components/InfoCard'
import { Wrapper, List, Title } from './components/StyledComponents'

class App extends Component {
  constructor() {
    super()
    this.state = {
      skaters: []
    }
  }
  componentDidMount() {
    axios.get('/skaters').then(res => {
      const { skaters } = res.data
      this.setState({ skaters })
    })
  }

  addSkater = e => {
    e.preventDefault()
    console.log(e)
    // axios.post('/skaters/:skater').then(console.log('success... maybe?'))
  }
  render() {
    const { skaters } = this.state
    console.log(skaters)
    return (
      <Wrapper className="App">
        <Title>
          SuperJam{' '}
          <span role="img" aria-label="star emoji">
            💫
          </span>
        </Title>
        <List>{skaters.map(skater => <InfoCard data={skater} />)}</List>
      </Wrapper>
    )
  }
}

export default App
