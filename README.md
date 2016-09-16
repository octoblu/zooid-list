# zooid-list
React Button Component

[![Build Status](https://travis-ci.org/octoblu/zooid-list.svg?branch=master)](https://travis-ci.org/octoblu/zooid-list)
[![Test Coverage](https://codecov.io/gh/octoblu/zooid-list/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/zooid-list)
[![Dependency status](http://img.shields.io/david/octoblu/zooid-list.svg?style=flat)](https://david-dm.org/octoblu/zooid-list)
[![devDependency Status](http://img.shields.io/david/dev/octoblu/zooid-list.svg?style=flat)](https://david-dm.org/octoblu/zooid-list#info=devDependencies)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

[![NPM](https://nodei.co/npm/zooid-list.svg?style=flat)](https://npmjs.org/package/zooid-list)


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
