import React from 'react'
import { action, storiesOf } from '@kadira/storybook'

import List, { ListItem } from '../src'

storiesOf('List', module)
  .add('Basic', () => (
    <List>
      <ListItem>List Item #1</ListItem>
      <ListItem>List Item #2</ListItem>
      <ListItem>List Item #3</ListItem>
    </List>
  ))
  .add('List Item with onClick prop', () => (
    <List>
      <ListItem onClick={action('clicked!')}>List Item #1</ListItem>
      <ListItem onClick={action('clicked!')}>List Item #2</ListItem>
      <ListItem onClick={action('clicked!')}>List Item #3</ListItem>
    </List>
  ))
