import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

// eslint-disable-next-line
class SkaterPage extends React.Component {
  state = {
    skater: null
  }
  componentDidMount() {
    const { skater } = this.props
    axios.get(`skaters/${skater._id}`).then(res => {
      const skaterData = res.data.payload
      this.setState({ skater: skaterData })
    })
  }
  render() {
    const { skater } = this.state
    return (
      <div>
        <h2>This is an individual skater page</h2>
        <span>{skater.derbyName}</span>
      </div>
    )
  }
}

SkaterPage.propTypes = {
  skater: PropTypes.object
}

export default SkaterPage
