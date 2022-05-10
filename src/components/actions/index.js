'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Show repositories</button>
    <button onClick={getStarred}>Show favorites</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
