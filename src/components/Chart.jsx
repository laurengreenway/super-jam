import React from 'react'
import PropTypes from 'prop-types'
import { VictoryChart, VictoryBar, VictoryStack } from 'victory-chart'

export const Chart = props => {
  console.log(props)
  const skaterData = props.data.log.filter(l => l.skaterId === props.skaterId)
  const opponent = props.data.log.filter(l => l.skaterId !== props.skaterId)

  console.log(skaterData)
  console.log(opponent)
  return (
    <VictoryChart>
      <VictoryStack>
        <VictoryBar data={skaterData} x="pass" y="time" />
        <VictoryBar data={opponent} x="pass" y="time" />
      </VictoryStack>
    </VictoryChart>
  )
}

Chart.propTypes = {
  data: PropTypes.array,
  skaterId: PropTypes.string
}
