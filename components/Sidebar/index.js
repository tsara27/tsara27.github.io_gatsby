import React from 'react'
import ProfilePicture from './ProfilePicture'
import ProfileCaption from './ProfileCaption'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

module.exports = React.createClass({
  render () {
    return (
      <div className="sidebar">
        <ProfilePicture />
        <ProfileCaption />
        <div className="links">
          <Link to={prefixLink('/blog/')}>Blog</Link>
          <Link to={prefixLink('/new_to_ruby/')}>New to Ruby?</Link>
          <Link to={prefixLink('/about/')}>About</Link>
        </div>
        <blockquote className="quotes">“Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.” - Steve Jobs</blockquote>
        <div className="social-icons">
          <ul className="soc">
            <li><a className="soc-twitter" href="https://twitter.com/{{ site.twitter_username }}"></a></li>
            <li><a className="soc-facebook" href="https://www.facebook.com/{{ site.facebook_username }}"></a></li>
            <li><a className="soc-google" href="https://plus.google.com/{{ site.google_plus_username }}"></a></li>
            <li><a className="soc-linkedin soc-icon-last" href="https://id.linkedin.com/in/{{ site.linkedin_username }}"></a></li>
          </ul>
        </div>
      </div>

    )
  },
})
