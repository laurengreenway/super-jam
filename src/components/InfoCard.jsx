import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, SmallTitle } from './StyledComponents'

const InfoCard = ({ data, handleClick }) => (
  <ListItem onClick={() => handleClick(data)}>
    <SmallTitle>{data.derbyName}</SmallTitle>
    <p>
      #{data.number}, {data.roles.map(role => `${role} `)}
    </p>
  </ListItem>
)

InfoCard.propTypes = {
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default InfoCard
