/* eslint-disable react/no-unused-prop-types, react/no-multi-comp, react/no-did-mount-set-state, react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "part:@sanity/base/client";
import { assemblePageUrl, websiteUrl, toPlainText } from "./frontendUtils";
import styles from "./TwitterCard.css";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return builder.image(source);
};

const author = {
  name: "Admin",
  handle: "admin",
  image: "",
};

class TwitterCard extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object,
    width: PropTypes.number,
    route: PropTypes.object,
  };

  static defaultProps = {
    document: null,
    width: 500,
  };

  render() {
    const { document, width, options } = this.props;
    const { openGraph } = document;
    const url = assemblePageUrl({ document, options });
    const websiteUrlWithoutProtocol = url.split("://")[1];
    return (
      <div className={styles.seoItem}>
        <h3>Twitter card preview</h3>
        <div className={styles.tweetWrapper} style={{ width }}>
          {author && (
            <div className={styles.tweetAuthor}>
              <img
                className={styles.tweetAuthorAvatar}
                src={
                  author && typeof author.image === "object"
                    ? urlFor(author.image).width(300).url()
                    : author.image
                }
              />
              <span className={styles.tweetAuthorName}>{author.name}</span>
              <span className={styles.tweetAuthorHandle}>@{author.handle}</span>
            </div>
          )}

          <div className={styles.tweetText}>
            <p>The card</p>
          </div>
          <a href={url} className={styles.tweetUrlWrapper}>
            <div className={styles.tweetCardPreview}>
              <div className={styles.tweetCardImage}>
                <img
                  src={urlFor(
                    openGraph && openGraph.image && openGraph.image.en
                  )
                    .width(300)
                    .url()}
                />
              </div>
              <div className={styles.tweetCardContent}>
                <h2 className={styles.tweetCardTitle}>
                  {openGraph && openGraph.title && openGraph.title.en}
                </h2>
                {openGraph &&
                  openGraph.description &&
                  openGraph.description.en && (
                    <div className={styles.tweetCardDescription}>
                      {openGraph.description.en}
                    </div>
                  )}
                <div className={styles.tweetCardDestination}>
                  {websiteUrlWithoutProtocol}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default TwitterCard;
