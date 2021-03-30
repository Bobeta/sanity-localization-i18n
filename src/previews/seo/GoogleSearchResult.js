/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state, react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { assemblePageUrl, toPlainText } from "./frontendUtils";
import Truncate from "./Truncate";
import styles from "./GoogleSearchResult.css";

class GoogleSearchResult extends React.PureComponent {
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
    const { document, options, width } = this.props;
    const { openGraph } = document;
    const url = assemblePageUrl({ document, options });
    console.log(document);

    return (
      <div className={styles.seoItem}>
        <h3>Google search result preview</h3>
        <div className={styles.googleWrapper} style={{ width }}>
          <Truncate maxWidth={width} className={styles.title}>
            {openGraph && openGraph.title && openGraph.title.en}
          </Truncate>
          <div className={styles.url}>{url}</div>
          {openGraph && openGraph.description && openGraph.description.en && (
            <Truncate maxChars={300} className={styles.description}>
              {openGraph.description.en}
            </Truncate>
          )}
        </div>
      </div>
    );
  }
}

export default GoogleSearchResult;
