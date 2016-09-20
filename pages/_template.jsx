import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Sidebar from 'components/Sidebar'

import 'sass/main.scss'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div className="container">
        <Sidebar />
        <div className="page-content">
          <div className="wrapper">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  },
})
