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
    pages.forEach(function(page) {
      if (access(page, 'file.ext') === 'md' && _.includes(page.path, '/blog/')) {
        const tags = []
        access(page, 'data.tags').split(' ').forEach(function(tag) {
          tags.push(<Link className="tag" to={prefixLink('/tags/')}>{tag}</Link>)
        })
        rows.push(
          <li>
            <h2>
              <Link className="post-link" to={prefixLink(page.path)}>{access(page, 'data.title')}</Link>
            </h2>
            <p className="post-meta"><PostDate date={access(page, 'data.date')} /> • <Tags tags={tags} /></p>
            <p className="post-content">{access(page, 'data.description')}<Link className="read-more" to={prefixLink(page.path)}>Read More</Link></p>
          </li>
        )
      }
    })
    return (
      <DocumentTitle title={config.siteTitle}>
        <div className="home">
          <ul className="post-list">
            {rows}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
