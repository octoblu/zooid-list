import classNames from 'classnames'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const List = ({ children, className }) => {
  const classes = classNames(styles.root, className)
  return <ul className={classes}>{children}</ul>
}

List.propTypes    = propTypes

export default List
