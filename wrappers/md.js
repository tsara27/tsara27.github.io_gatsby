import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import moment from 'moment'
import Tags from 'components/commons/Tags'
import PostDate from 'components/commons/PostDate'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    if (post.layout === 'post') {
      const tags = []
      post.tags.split(' ').forEach(function(tag) {
        tags.push(tag)
      })
      return (
        <DocumentTitle title={`${config.siteTitle} | ${post.title}`}>
          <div className="markdown">
            <h1>{post.title}</h1>
            <p className="post-meta"><PostDate date={post.date} /> • <Tags tags={tags} /></p>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </DocumentTitle>
      )
    } else {
      return (
        <DocumentTitle title={`${config.siteTitle} | ${post.title}`}>
          <div className="markdown">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </DocumentTitle>
      )
    }

  },
})
