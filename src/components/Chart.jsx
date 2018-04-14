import React from 'react'
import PropTypes from 'prop-types'
import { VictoryChart, VictoryBar, VictoryGroup } from 'victory-chart'

export const Chart = props => {
  console.log(props)
  const skaterData = props.data.log.filter(l => l.skaterId === props.skaterId)
  const opponent = props.data.log.filter(l => l.skaterId !== props.skaterId)

  console.log(skaterData)
  console.log(opponent)
  return (
    <VictoryChart>
      <VictoryGroup
        offset={20}
        colorScale="blue"
        animate={{
          duration: 1000,
          onLoad: { duration: 500 }
        }}
        labels={['this skater', 'the opponent']}
        width={300}
        height={300}
      >
        <VictoryBar data={skaterData} x="pass" y="time" />
        <VictoryBar data={opponent} x="pass" y="time" />
      </VictoryGroup>
    </VictoryChart>
  )
}

Chart.propTypes = {
  data: PropTypes.array,
  skaterId: PropTypes.string
}
