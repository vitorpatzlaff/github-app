'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import pagination from 'utils/pagination'
import Page from './page'

import './pagination.css'

const Pagination = ({ total, activePage, pageLink, onClick }) => (
  <ul className='pagination'>
    {pagination({ total, activePage }).map((page, index) => (
      <li key={index} className={`pagination-item ${page === activePage ? 'active' : ''}`}>
        <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
      </li>
    ))}
  </ul>
)

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1
}

pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
}

export default Pagination
