import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import axios from 'axios'

import InfoCard from './InfoCard'
import Clock from './Clock'
import {
  TimerContainer,
  Controls,
  ClockContainer,
  List,
  Button,
  SmallTitle
} from './StyledComponents'

class Timer extends React.Component {
  state = {
    running: false,
    startTime: null,
    log: [],
    errors: null
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

  lapsPerSkater = skaterId =>
    this.state.log.filter(l => l.skaterId === skaterId).length
  recordLastLap = skaterId => {
    const pass = this.lapsPerSkater(skaterId)
    const time = moment.now()
    return {
      skaterId,
      time,
      pass
    }
  }

  stop = () => {
    const timestamp = moment.now()
    const { running, startTime, log } = this.state
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

  reset = () => {
    this.props.resetSkater()
    this.setState({
      running: false,
      startTime: null,
      log: []
    })
  }

  lap = e => {
    e.preventDefault()
    const skaterId = e.target.name

    const { startTime, log } = this.state

    const pass = this.lapsPerSkater(skaterId)
    const lap = moment.now()
    const time = lap - startTime

    const newLog = {
      skaterId,
      time,
      pass
    }
    this.setState({
      log: [...log, newLog]
    })
  }

  save = data => {
    console.log(data)
    axios.post('/jams', data).then(res => {
      if (res.status === 200) this.reset()
      // TODO: fix this bullshit
      if (res.status === 500) this.setState({ errors: res.status })
    })
  }

  render() {
    const { running, startTime, errors } = this.state
    const { skater1, skater2, skaters, setSkater } = this.props
    return (
      <TimerContainer>
        <ClockContainer>
          {running && <Clock startTime={startTime} handleStop={this.stop} />}

          {errors && <p>{errors}</p>}
        </ClockContainer>
        <Controls>
          <Button
            onClick={this.lap}
            disabled={!running}
            name={`${skater1 && skater1._id}`}
          >
            Pass Tracker {skater1 ? skater1.derbyName : 'Jammer 1'}
          </Button>
          {running ? (
            <Button
              onClick={e => {
                e.preventDefault()
                this.stop()
              }}
            >
              Stop Jam
            </Button>
          ) : (
            <Button onClick={this.start}>Start Jam</Button>
          )}
          <Button
            onClick={this.lap}
            disabled={!running}
            name={`${skater2 && skater2._id}`}
          >
            Pass Tracker {skater2 ? skater2.derbyName : 'Jammer 2'}
          </Button>
        </Controls>
        <SmallTitle>Select two jammers from the list below</SmallTitle>
        <List>
          {skaters.map(skater => (
            <InfoCard handleClick={setSkater} key={skater._id} data={skater} />
          ))}
        </List>
      </TimerContainer>
    )
  }
}

Timer.propTypes = {
  skater1: PropTypes.object,
  skater2: PropTypes.object,
  resetSkater: PropTypes.func,
  setSkater: PropTypes.func,
  skaters: PropTypes.arrayOf(PropTypes.object)
}

export default Timer
