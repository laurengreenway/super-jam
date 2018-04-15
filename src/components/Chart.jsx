import React from 'react'
import PropTypes from 'prop-types'
import { VictoryChart, VictoryBar, VictoryGroup } from 'victory-chart'
import moment from 'moment'
import { SmallTitle } from './StyledComponents'

export const Chart = props => {
  const { data, skaterId, skaters } = props

  const getSkaterData = id => {
    return data.log.filter(l => l.skaterId === id)
  }
  const getSkaterInfo = id => {
    const info = skaters.find(skater => skater._id === id)
    return info
  }
  const opponent = data.log.find(l => l.skaterId !== skaterId)
  const skaterInfo = getSkaterInfo(skaterId)
  const opponentInfo = getSkaterInfo(opponent.skaterId)
  const skaterData = getSkaterData(skaterId)
  const opponentData = getSkaterData(opponent.skaterId)
  const date = moment(data.date).format('YYYY-MM-DD')
  return (
    <div>
      <SmallTitle>
        {skaterInfo.derbyName} vs {opponentInfo.derbyName}
      </SmallTitle>
      <p>{date}</p>
      <VictoryChart>
        <VictoryGroup
          offset={20}
          colorScale="blue"
          animate={{
            duration: 1000,
            onLoad: { duration: 500 }
          }}
          labels={[skaterInfo.derbyName, opponentInfo.derbyName]}
          width={300}
          height={300}
        >
          <VictoryBar data={skaterData} x="pass" y="time" />
          <VictoryBar data={opponentData} x="pass" y="time" />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.object,
  skaterId: PropTypes.string,
  skaters: PropTypes.arrayOf(PropTypes.string)
}
