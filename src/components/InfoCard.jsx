import React from 'react'
import PropTypes from 'prop-types'

import { ListItem, SmallTitle } from './StyledComponents'

const InfoCard = ({ data }) => (
  <ListItem key={data.legalName}>
    <SmallTitle>{data.derbyName}</SmallTitle>
    <p>
      #{data.number}, {data.roles.map(role => `${role} `)}
    </p>
  </ListItem>
)

InfoCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.Object).isRequired
}

export default InfoCard
