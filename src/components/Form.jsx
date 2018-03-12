import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ addSkater }) => {
  return (
    <form onSubmit={addSkater}>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" />
      </label>
      <label htmlFor="number">
        Number:
        <input type="text" name="number" />
      </label>
      <label htmlFor="role">
        Primary Role:
        <select name="role">
          <option>Blocker</option>
          <option>Pivot</option>
          <option>Jammer</option>
          <option>Coach</option>
        </select>
      </label>
      <button
        onClick={e => {
          e.preventDefault()
        }}
      >
        Add Skater
      </button>
    </form>
  )
}

Form.propTypes = {
  addSkater: PropTypes.func.isRequired
}

export default Form
