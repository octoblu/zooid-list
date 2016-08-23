import classNames from 'classnames'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

const defaultProps = {}

const ListItem = ({ children, className, onClick }) => {
  let props = {
    className: classNames(styles.root, className),
  }

  if (onClick) {
    props = {
      onClick,
      className: classNames(styles.root, styles.button, className),
    }
  }

  return (
    <li {...props}>{children}</li>
  )
}

ListItem.propTypes    = propTypes
ListItem.defaultProps = defaultProps

export default ListItem
