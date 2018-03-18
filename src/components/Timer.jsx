import React from 'react'
import moment from 'moment'

import {
  TimerContainer,
  JammerContainer,
  ClockContainer
} from './StyledComponents'

class Timer extends React.Component {
  state = {
    running: false,
    laps: {
      skater1: [],
      skater2: []
    },
    startTime: null,
    elapsedTime: null
  }

  start = e => {
    e.preventDefault()
    const { running } = this.state
    const startTime = moment.now()
    if (!running) {
      this.setState({
        running: !running,
        startTime,
        laps: {
          skater1: [startTime],
          skater2: [startTime]
        }
      })
    }
  }

  stop = e => {
    e.preventDefault()
    const { running } = this.state
    this.setState({
      running: !running,
      elapsedTime: null
    })
  }

  countdown = () => {
    const { running, startTime } = this.state
    const timestamp = moment.now()
    console.log(startTime)
    console.log(timestamp)
    const elapsedTime = timestamp - startTime
    console.log('in countdown', elapsedTime)
    while (running && elapsedTime < 120000) {
      this.setState({ elapsedTime })
    }
  }

  lap = e => {
    e.preventDefault()
    const skater = e.target.name
    const lap = moment.now()
    const { laps } = this.state
    this.setState({
      laps: {
        ...laps,
        [skater]: [...laps[skater], lap]
      }
    })
  }

  render() {
    const { running, elapsedTime, laps } = this.state
    return (
      <TimerContainer>
        <ClockContainer>
          Clock Goes Here {elapsedTime}
          {running ? (
            <button onClick={this.stop}>
              Touching this should stop the jam clock
            </button>
          ) : (
            <button onClick={this.start}>
              Touching this should start the jam clock
            </button>
          )}
        </ClockContainer>
        <JammerContainer>
          Dropdown menu to select from existing skaters... could possibly also
          be a text input that matches the number to the skaters in the
          database.
          <button onClick={this.lap} disabled={!running} name="skater1">
            Pass Tracker
          </button>
          {laps.skater1.map(lap => <p key={lap}>{lap}</p>)}
        </JammerContainer>
        <JammerContainer>
          Dropdown menu to select from existing skaters... could possibly also
          be a text input that matches the number to the skaters in the
          database.
          <button onClick={this.lap} disabled={!running} name="skater2">
            Pass Tracker
          </button>
          {laps.skater2.map(lap => <p key={lap}>{lap}</p>)}
        </JammerContainer>
      </TimerContainer>
    )
  }
}

export default Timer
