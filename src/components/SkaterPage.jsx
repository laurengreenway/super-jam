import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Chart } from './Chart'

class SkaterPage extends React.Component {
  state = {
    skaterData: null
  }
  componentDidMount() {
    const { skater } = this.props
    axios.get(`${skater._id}`).then(res => {
      const skaterData = res.data.payload
      this.setState({ skaterData })
    })
  }
  render() {
    const { skaterData } = this.state
    const { skater, skaters } = this.props
    return (
      <div>
        <h2>This is an individual skater page</h2>
        {skaterData && (
          <div>
            {skaterData.map(sd => {
              console.log('skater data', sd)

              return <Chart data={sd} skaterId={skater._id} skaters={skaters} />
            })}
          </div>
        )}
      </div>
    )
  }
}

SkaterPage.propTypes = {
  skater: PropTypes.object,
  skaters: PropTypes.arrayOf(PropTypes.object)
}

export default SkaterPage
