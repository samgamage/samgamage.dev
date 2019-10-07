import React, {Component} from "react"
import {
  LinkedinIcon,
  LinkedinShareButton,
  LinkedinShareCount,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import config from "../../config/SiteConfig"
import HorizontalList from "./HorziontalList"

class SocialLinks extends Component {
  render() {
    const {postNode, postPath, mobile} = this.props
    const post = postNode.frontmatter
    const url = config.siteUrl + postPath
    const iconSize = mobile ? 36 : 48
    const filter = count => (count > 0 ? count : "")
    const renderShareCount = count => (
      <div className="share-count">{filter(count)}</div>
    )

    return (
      <HorizontalList spaceBetween={2}>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => renderShareCount(count)}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => renderShareCount(count)}
          </LinkedinShareCount>
        </LinkedinShareButton>
      </HorizontalList>
    )
  }
}

export default SocialLinks
