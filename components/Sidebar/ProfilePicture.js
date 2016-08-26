import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({
  render () {
    return (
      <div id="profile-picture">
        <Link to='/blog/'><img src="/images/ruby-256.png" height="125" width="125"></img></Link>
      </div>
    )
  },
})
