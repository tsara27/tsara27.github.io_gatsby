import React from 'react'
import Tag from './Tag'

module.exports = React.createClass({
  render () {
    const tags = this.props.tags.map(function(tag) {
      return (
        <Tag tag={tag} />
      )
    })
    return (
      <span>
        <i className="fa fa-tags"></i>
        {tags}
      </span>
    )
  },
})
