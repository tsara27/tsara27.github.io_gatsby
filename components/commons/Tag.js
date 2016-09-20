import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  render () {
    const tag = this.props.tag
    return (
      <Link className="tag" to={prefixLink('/tags/'+'#'+tag)}>{this.props.tag}</Link>
    )
  }
})
