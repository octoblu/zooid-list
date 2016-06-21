import classNames from 'classnames'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const defaultProps = {}

const ListItem = ({ children, className }) => {
  const classes = classNames(styles.root, className)
  return <li className={classes}>{children}</li>
}

ListItem.propTypes    = propTypes
ListItem.defaultProps = defaultProps

export default ListItem
