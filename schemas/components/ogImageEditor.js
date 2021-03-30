import React from "react";

import styles from "./ogImageEditor.css";

const ImageEditor = ({ title, subtitle }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className={styles.logo}>
        <img src="/static/logo.svg" />
      </div>
      <img src="/static/image.png" className={styles.bg} />
    </div>
  );
};

export default {
  name: "ogImage1200",
  component: ImageEditor,
  prepare: (document) => ({
    // title: document.hero?.title || document.seoTitle || document.internalTitle,
    // subtitle: document.seoDescription,
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "text",
    },
  ],
  dimensions: {
    width: 800,
    height: 800,
  },
};
