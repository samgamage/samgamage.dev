import React, {Component} from "react"
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  LinkedinShareCount,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import urljoin from "url-join"
import config from "../../config/SiteConfig"
import HorizontalList from "./HorziontalList"

class SocialLinks extends Component {
  render() {
    const {postNode, postPath, mobile} = this.props
    const post = postNode.frontmatter
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath)
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
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => renderShareCount(count)}
          </FacebookShareCount>
        </FacebookShareButton>
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
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </HorizontalList>
    )
  }
}

export default SocialLinks
