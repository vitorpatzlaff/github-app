'use strict'

import React from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'
import './app.css'

import PropTypes from 'prop-types'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
  handlePagination
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Loading...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.repos.length &&
      <Repos
        className='repos'
        title='Repositories:'
        repos={repos}
        handlePagination={(clicked) => handlePagination('repos', clicked)}
      />}

    {!!starred.repos.length &&
      <Repos
        className='starred'
        title='Favorites:'
        repos={starred}
        handlePagination={(clicked) => handlePagination('starred', clicked)}
      />}
  </div>
)

const reposPropTypesShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.shape(reposPropTypesShape).isRequired,
  starred: PropTypes.shape(reposPropTypesShape).isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired
}

export default AppContent
