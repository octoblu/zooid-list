import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import List from '../src'

storiesOf('List', module)
  .add('Basic', () => (
    <List />
  ))
