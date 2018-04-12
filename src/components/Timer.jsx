import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import axios from 'axios'

import {
  TimerContainer,
  JammerContainer,
  ClockContainer
} from './StyledComponents'
// import SkaterPage from './SkaterPage'

class Timer extends React.Component {
  state = {
    running: false,
    startTime: null,
    log: [],
    success: false
  }

  start = e => {
    e.preventDefault()
    const { running } = this.state
    const { skater1, skater2 } = this.props
    const log = [
      {
        skaterId: skater1._id,
        time: 0,
        pass: 0
      },
      {
        skaterId: skater2._id,
        time: 0,
        pass: 0
      }
    ]
    const startTime = moment.now()
    if (!running) {
      this.setState({
        running: !running,
        startTime,
        log
      })
    }
  }

  stop = e => {
    e.preventDefault()
    const { running, startTime, log } = this.state
    const timestamp = moment.now()
    const elapsedTime = timestamp - startTime
    const data = {
      elapsedTime,
      log,
      date: new Date()
    }
    this.save(data)
    this.setState({
      running: !running
    })
  }

  // TODO: need visual element to timer, must max out at 2 min

  // TODO: 30s between jams
  // TODO: concept of practice

  reset = () => {
    this.props.resetSkater()
    this.setState({
      running: false,
      startTime: null,
      log: [],
      success: false
    })
  }

  lap = e => {
    e.preventDefault()

    const { startTime, log } = this.state

    const skaterId = e.target.name
    const lapsPerSkater = log.filter(l => l.skaterId === skaterId)
    const lap = moment.now()
    const time = lap - startTime
    const newLog = {
      skaterId,
      time,
      pass: lapsPerSkater.length
    }
    console.log(newLog)
    this.setState({
      log: [...log, newLog]
    })
  }

  save = data => {
    console.log(data)
    // does not currently save to db, how do i view this in compass?
    axios.post('/jams', data).then(res => {
      if (res.status === 200) this.setState({ success: true })
      // if (res.status === 500)
      this.reset()
    })
  }

  render() {
    const { running, elapsedTime, success } = this.state
    const { skater1, skater2 } = this.props
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
          {success && <p>Jam saved successfully</p>}
        </ClockContainer>
        <JammerContainer>
          Dropdown menu to select from existing skaters... could possibly also
          be a text input that matches the number to the skaters in the
          database.
          <button
            onClick={this.lap}
            disabled={!running}
            name={`${skater1 && skater1._id}`}
          >
            Pass Tracker {skater1 && skater1.derbyName}
          </button>
        </JammerContainer>
        <JammerContainer>
          Dropdown menu to select from existing skaters... could possibly also
          be a text input that matches the number to the skaters in the
          database.
          <button
            onClick={this.lap}
            disabled={!running}
            name={`${skater2 && skater2._id}`}
          >
            Pass Tracker {skater2 && skater2.derbyName}
          </button>
        </JammerContainer>
      </TimerContainer>
    )
  }
}

Timer.propTypes = {
  skater1: PropTypes.object,
  skater2: PropTypes.object,
  resetSkater: PropTypes.func
}

export default Timer
