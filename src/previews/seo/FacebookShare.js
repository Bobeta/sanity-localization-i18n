import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "part:@sanity/base/client";
import { websiteUrl, toPlainText } from "./frontendUtils";
import styles from "./FacebookShare.css";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return builder.image(source);
};

class FacebookShare extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object,
    width: PropTypes.number,
  };

  static defaultProps = {
    document: null,
    width: 500,
  };

  render() {
    const { document, width } = this.props;
    const { openGraph } = document;
    const websiteUrl = "http://localhost:3000";
    const websiteUrlWithoutProtocol = websiteUrl.split("://")[1];

    return (
      <div className={styles.seoItem}>
        <h3>Facebook share</h3>
        <div className={styles.facebookWrapper} style={{ width }}>
          <div className={styles.facebookImageContainer}>
            <img
              className={styles.facebookCardImage}
              src={urlFor(openGraph && openGraph.image && openGraph.image.en)
                .width(500)
                .url()}
            />
          </div>
          <div className={styles.facebookCardContent}>
            <div className={styles.facebookCardUrl}>
              {websiteUrlWithoutProtocol}
            </div>
            <div className={styles.facebookCardTitle}>
              <a href={websiteUrl}>
                {openGraph && openGraph.title && openGraph.title.en}
              </a>
            </div>
            {openGraph && openGraph.description && openGraph.description.en && (
              <div className={styles.facebookCardDescription}>
                {openGraph.description.en}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FacebookShare;
