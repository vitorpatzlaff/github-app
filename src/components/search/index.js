'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Enter a GitHub username'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
