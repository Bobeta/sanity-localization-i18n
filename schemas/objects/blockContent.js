import React from "react";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;

const highlightRender = (props) => (
  <span style={{ backgroundColor: "#5ba5e5" }}>{props.children}</span>
);

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        // { title: "Small", value: "small" },
        // { title: "Large", value: "large" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "Title", value: "title" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          // { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              {
                title: "Open in new window",
                name: "blank",
                type: "boolean",
              },
            ],
            blockEditor: {
              icon: () => <div>🌎</div>,
            },
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // { type: "grid", title: "Columns with Grid" },
    { type: "flex", title: "Columns with Flex" },
    // { type: "containedSize", title: "Contained Box" },
    {
      type: "illustration",
      options: { hotspot: true },
    },
    { type: "infoText", title: "Information content" },
    { type: "infoSection", title: "Information with image" },
    { type: "infoWithIcon", title: "Icon with information" },
    { type: "divTop", title: "Divider: Top" },
    { type: "divBottom", title: "Divider: Bottom" },
    { type: "gridTeam", title: "Grid: Employees" },
    { type: "gridTeamFull", title: "All Employees" },
    { type: "showcaseIntegrations", title: "Grid: Integrations" },
    { type: "showcaseTemplate", title: "Grid: Template" },
    { type: "showcaseFeatures", title: "Features UI" },
    { type: "reviews", title: "Grid: Reviews" },
    { type: "gridReference" },
    { type: "sliderThemes", title: "Slider: Themes" },
    { type: "sliderShops", title: "Slider: General" },
    { type: "customerStories", title: "Slider: Fullwidth" },
    { type: "ctaBoxButtons", title: "Box Buttons" },
    { type: "pricingPlan", title: "Pricing Plans" },
    { type: "featureList" },
    { type: "button", title: "Button" },
    { type: "linkWithArrow", title: "Link with arrow" },
    // { type: "logoList" },
    { type: "backgroundApi", title: "Content with background code" },
    { type: "formContact", title: "Contact form" },
    { type: "migratePicker", title: "Migrate scroller" },
    { type: "migrateOptions", title: "Migrate options" },
    { type: "boxInfo", title: "Information boxes" },
    { type: "facebookPage", title: "Embed: Facebook page" },
    { type: "youtube", title: "Embed: Youtube" },
    { type: "infoSteps", title: "Steps" },
    { type: "iframeGeneral", title: "Iframe Google Maps" },
    { type: "landingIntro", title: "Shop Introduction" },
    { type: "uiAdmin", title: "Admin UI" },
    { type: "gradientSection", title: "Gradient entry" },
    { type: "testZone", title: "Dev: Test zone 1" },
    // {
    //   type: "code",
    //   title: "code editor",
    //   name: "code",
    // },
  ],
};
