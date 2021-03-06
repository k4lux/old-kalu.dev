import React, { useState, useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import charCodes from '_config/char-codes'
import styles from './styles.css'

const Accordion = ({
  isOpen,
  onToggle,
  children,
  header,
}) => {
  const [height, setHeight] = useState(0)
  const ref = createRef()

  useEffect(() => {
    setHeight(ref.current.scrollHeight)
  })

  const handleKeyPress = (event) => {
    if (event.charCode === charCodes.ENTER) {
      onToggle()
    }
  }

  return (
    <div
      ref={ref}
      style={{ height: isOpen ? `${height}px` : '77px' }}
      className={classNames(styles.wizard, { [styles.open]: isOpen })}
    >
      <div
        onClick={onToggle}
        className={styles.header}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={0}
      >
        {header}
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}

Accordion.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  onToggle: PropTypes.func,
}

Accordion.defaultProps = {
  isOpen: false,
  onToggle: () => {},
}

export default Accordion
