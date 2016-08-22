import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  render () {
    return (
      <Link className="tag" to={prefixLink('/tags/')}>{this.props.tag}</Link>
    )
  },
})
