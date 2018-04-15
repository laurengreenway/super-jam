import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { ClockText } from './StyledComponents'

export default class Clock extends React.Component {
  state = {
    count: '00:00'
  }

  componentDidMount() {
    this.stopWatch()
  }

  setCount = count => {
    setTimeout(() => {
      this.setState({ count }, () => this.stopWatch())
    }, 10)
  }

  stopWatch = () => {
    const { startTime, handleStop } = this.props
    const { count } = this.state

    const timestamp = moment.now()
    const formattedTime = moment(timestamp - startTime).format('mm:ss')

    if (count !== '02:00') {
      this.setCount(formattedTime)
    }
    if (count === '02:00') {
      handleStop()
      this.setCount('00:00')
    }
  }

  render() {
    const { count } = this.state
    return <ClockText>{count}</ClockText>
  }
}

Clock.propTypes = {
  startTime: PropTypes.any,
  handleStop: PropTypes.func
}
