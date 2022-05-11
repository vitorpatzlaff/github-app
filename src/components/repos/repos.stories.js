'use strict'

import React from 'react'
import Repos from './index'

export default {
  title: 'Repository',
  component: Repos
}

export const First = () => (
  <Repos
    title='Favorites'
  />
)

export const Second = () => (
  <Repos
    title='Favoritos'
    repos={[{
      link: 'https://www.youtube.com/',
      name: 'YouTube'
    }]}
  />
)
