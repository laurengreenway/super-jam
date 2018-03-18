import React, { Component } from 'react'
import axios from 'axios'
import InfoCard from './components/InfoCard'
import Timer from './components/Timer'
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
      const skaters = res.data.payload
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
    return (
      <Wrapper className="App">
        <Title>
          SuperJam{' '}
          <span role="img" aria-label="star emoji">
            💫
          </span>
        </Title>
        <Timer />
        <List>
          {skaters.map(skater => <InfoCard key={skater._id} data={skater} />)}
        </List>
      </Wrapper>
    )
  }
}

export default App
