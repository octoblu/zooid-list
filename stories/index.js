import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import List, { ListItem } from '../src'

storiesOf('List', module)
  .add('Basic', () => (
    <List>
      <ListItem>List Item #1</ListItem>
      <ListItem>List Item #2</ListItem>
      <ListItem>List Item #3</ListItem>
    </List>
  ))
