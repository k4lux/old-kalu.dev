import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Button = ({
  onClick, children, href
}) => {
  if (href) {
    return <a className={styles.button} href={href}>{children}</a>
  }

  return (
    <button className={styles.button} onClick={onClick} type="button">
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  href: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  href: undefined,
}

export default Button
