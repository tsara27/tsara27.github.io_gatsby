import React from 'react'
import moment from 'moment'

module.exports = React.createClass({
  render () {
    return (
      <span>
        <i className="fa fa-calendar"></i>
        <span> {moment(new Date(this.props.date)).format("MMM D, YYYY")}</span>
      </span>
    )
  },
})
