import React from "react";
import PropTypes from "prop-types";
import styles from "./IframePreview.css";

const assembleURL = ({ displayed, options }) => {
  const { slug } = displayed;
  const { previewURL, selectedLanguage } = options;
  if (!slug || !previewURL) {
    console.warn("Missing slug or previewURL", { slug, previewURL });
    return "";
  }
  if (selectedLanguage == "en" && slug.en) {
    return `${previewURL}${selectedLanguage}/${slug.en.current}`;
  }
  if (selectedLanguage == "sv" && slug.sv) {
    return `${previewURL}${selectedLanguage}/${slug.sv.current}`;
  }
  if (selectedLanguage == "da" && slug.da) {
    return `${previewURL}${selectedLanguage}/${slug.da.current}`;
  }
  if (selectedLanguage == "no" && slug.no) {
    return `${previewURL}${selectedLanguage}/${slug.no.current}`;
  }
};

class IframePreview extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object,
  };

  static defaultProps = {
    document: null,
  };

  render() {
    const { options } = this.props;
    const { displayed } = this.props.document;
    if (!displayed) {
      return (
        <div className={styles.componentWrapper}>
          <p>There is no document to preview</p>
        </div>
      );
    }

    const url = assembleURL({ displayed, options });

    if (!url) {
      return (
        <div className={styles.componentWrapper}>
          <p>
            There's problems showing the webpage, maybe the slug for the page
            hasn't been created yet?
          </p>
        </div>
      );
    }

    return (
      <div className={styles.componentWrapper}>
        <div className={styles.iframeContainer}>
          <iframe src={url} frameBorder={"0"} />
        </div>
      </div>
    );
  }
}

export default IframePreview;
