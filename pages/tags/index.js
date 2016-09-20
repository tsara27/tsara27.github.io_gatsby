import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import access from 'safe-access'
import _ from 'lodash'
import moment from 'moment'
import Tags from 'components/commons/Tags'
import PostDate from 'components/commons/PostDate'

export default class Index extends React.Component {
  render () {
    const rows = []
    const pages = _.sortBy(this.props.route.pages, function(page) { return moment(new Date(access(page, 'data.date'))).format("X") }).reverse()
    const tag = this.props.location.hash.substring(1)
    pages.forEach(function(page) {
      if (access(page, 'file.ext') === 'md' && _.includes(page.path, '/blog/')) {
        if (_.includes(access(page, 'data.tags').split(' '), tag)) {
          rows.push(
            <li>
              <Link className="post-link" to={prefixLink(page.path)}>{access(page, 'data.title')} <PostDate date={access(page, 'data.date')} /></Link>
            </li>
          )
        }
      }
    })
    return (
      <DocumentTitle title={config.siteTitle}>
        <div className="home">
          <h1>Tag: '{tag}'</h1>
          <ul>
            {rows}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
