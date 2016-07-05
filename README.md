# zooid-list
React Button Component

[![Build Status](https://travis-ci.org/octoblu/zooid-list.svg?branch=master)](https://travis-ci.org/octoblu/zooid-list)
[![npm version](https://badge.fury.io/js/zooid-list.svg)](http://badge.fury.io/js/zooid-list)
[![Code Climate](https://codeclimate.com/github/octoblu/zooid-list.png)](https://codeclimate.com/github/octoblu/zooid-list)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

## Install
```
npm install --save zooid-list
```

## Props
| Prop      | Type   | Default | Description                          |
| ----------| -------| --------| -------------------------------------|
| className | string |         | Additional css classes for your button|
| children  |  node  |         | Children to be rendered |


## Example
```js
import  List, { ListItem } from 'zooid-list'

export default class App extends Component {
  render() {
    return <div>
      <h1>App</h1>
      <List>
        <ListItem>Item #1</ListItem>
        <ListItem>Item #2</ListItem>
        <ListItem>Item #3</ListItem>
      </List>
    </div>
  }
}
```

### Roadmap
- [ ] ListItem: Add onClick support
- [ ] ListItem: Add style options for: bordered, stripped, no-style
- [ ] ListItem: Add primary and secondary sections
