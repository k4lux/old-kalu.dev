import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from 'next/link'
import { withRouter } from 'next/router'

import Container from '_atoms/container'
import Brand from '_atoms/brand'

import styles from './styles.css'

class Header extends Component {
  state = {
    isNavOpen: false,
    currentPath: '',
    navHeight: undefined,
  }

  navRef = createRef()

  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        text: PropTypes.string,
      })
    ),
    isFixed: PropTypes.bool,
  }

  static defaultProps = {
    isFixed: false,
  }

  componentDidMount() {
    const { router } = this.props
    
    this.setState({
      currentPath: router.asPath,
      navHeight: this.navRef.current.scrollHeight,
    })
  }

  isCurrentNavItem(path) {
    const { currentPath } = this.state
    return currentPath == path
  }

  handleNavToggle = () => {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen,
    }))
  }

  render() {
    const { routes, isFixed } = this.props
    const { isNavOpen, navHeight } = this.state

    return (
      <header className={classNames(styles.header, { [styles.fixed]: isFixed })}>
        <Container>
          <div className={styles.headerInner}>
            <Brand />
            <button onClick={this.handleNavToggle} className={styles.navToggler}>
              <span />
              <span />
              <span />
            </button>
            <nav 
              ref={this.navRef} 
              style={{ height: isNavOpen ? `${navHeight}px` : 'auto' }} 
              className={styles.nav}
            >
              {routes.map(route => (
                <Link href={route.path} key={route.path}>
                  <a
                    className={classNames(styles.navItem, {
                      [styles.navItemCurrent]: this.isCurrentNavItem(route.path),
                    })}
                  >
                    {route.text}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </header>
    )
  }
}

export default withRouter(Header)
