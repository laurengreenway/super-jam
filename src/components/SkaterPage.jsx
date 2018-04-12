import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Chart } from './Chart'

// eslint-disable-next-line
class SkaterPage extends React.Component {
  state = {
    skaterData: null
  }
  componentDidMount() {
    const { skater } = this.props
    console.log('did mount', skater)
    axios.get(`${skater._id}`).then(res => {
      console.log('reso', res)
      const skaterData = res.data.payload
      console.log('skater to be set to state', skaterData)
      this.setState({ skaterData })
    })
  }
  render() {
    const { skaterData } = this.state
    const { skater } = this.props
    // console.log('sk8r', skater)
    console.log('data sk8r', skaterData)
    return (
      <div>
        <h2>This is an individual skater page</h2>
        {skaterData && (
          <div>
            you have data!{' '}
            {skaterData.map(sd => {
              console.log(sd)
              return (
                <div>
                  <p>{sd.date}</p>
                  <Chart data={sd} skaterId={skater._id} />
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

SkaterPage.propTypes = {
  skater: PropTypes.object
}

export default SkaterPage
