'use strict'

import React from 'react'

import Actions from './index'

export default {
  title: 'Actions',
  component: Actions,
  parameters: {
    actions: {
      handles: ['click']
    }
  }
}

export const First = () => (
  <Actions
    getRepos={() => {}}
    getStarred={() => {}}
  />
)
