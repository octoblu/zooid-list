import classNames from 'classnames'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const List = (argProps) => {
  let props = {...argProps}
  const { children, className } = props
  props.className = classNames(styles.root, className)
  return <ul {...props}>{children}</ul>
}

List.propTypes = propTypes

export default List
