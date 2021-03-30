export default {
  type: "object",
  name: "infoText",
  title: "Text section",
  fieldsets: [
    {
      name: "appearance",
      title: "Appearance",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
    {
      name: "desc",
      title: "Advanced Description",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
    {
      name: "buttonFirst",
      title: "First Button",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
    {
      name: "buttonSecond",
      title: "Second Button",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
  ],
  fields: [
    {
      type: "string",
      name: "topLine",
      title: "Top text",
    },
    {
      type: "string",
      name: "headline",
    },
    {
      type: "string",
      name: "description",
    },
    {
      type: "blockContent",
      name: "advancedDescription",
      fieldset: "desc",
    },
    {
      title: "Bottom text",
      name: "subtitle",
      type: "string",
    },
    {
      type: "string",
      name: "buttonText",
      fieldset: "buttonFirst",
    },
    {
      type: "string",
      name: "buttonUrl",
      fieldset: "buttonFirst",
    },
    {
      title: "Button type",
      name: "buttonType",
      fieldset: "buttonFirst",
      type: "string",
      options: {
        list: [
          { title: "primary", value: "buttons.cta" },
          { title: "secondary", value: "buttons.secondary" },
        ],
        layout: "radio",
      },
    },
    {
      type: "string",
      name: "buttonSecondText",
      fieldset: "buttonSecond",
    },
    {
      type: "string",
      name: "buttonSecondUrl",
      fieldset: "buttonSecond",
    },
    {
      title: "Button type",
      name: "buttonSecondType",
      fieldset: "buttonSecond",
      type: "string",
      options: {
        list: [
          { title: "primary", value: "buttons.cta" },
          { title: "secondary", value: "buttons.secondary" },
        ],
        layout: "radio",
      },
    },
    // {
    //   title: "Predefined Colors",
    //   description: "Pick one below",
    //   name: "colorlist",
    //   type: "colors", // required
    //   options: {
    //     borderradius: {
    //       outer: "100%",
    //       inner: "100%",
    //     },
    //     list: [
    //       { title: "Yellow", value: "rgba(245, 199, 1, 0.5)" },
    //       { title: "Pink", value: { r: 246, g: 206, b: 219 } },
    //       { title: "Red", value: "#f16d70" },
    //       { title: "Teal", value: "#88c6db" },
    //       { title: "Purple", value: "#aca0cc" },
    //       { title: "Green", value: "#bdcdcb" },
    //       { title: "White", value: "white" },
    //     ],
    //   },
    // },
    {
      type: "boolean",
      name: "centered",
      fieldset: "appearance",
    },
    {
      name: "colorBg",
      type: "color",
      title: "Background color",
      fieldset: "appearance",
    },
    {
      name: "colorTop",
      type: "color",
      title: "Topline color",
      fieldset: "appearance",
    },
    {
      name: "bgTop",
      type: "color",
      title: "Topline background color",
      fieldset: "appearance",
    },
    {
      name: "colorHeadline",
      type: "color",
      title: "Headline color",
      fieldset: "appearance",
    },
    {
      name: "colorDesc",
      type: "color",
      title: "Color description",
      fieldset: "appearance",
    },
    {
      name: "colorButtonBg",
      type: "color",
      title: "Button background color",
      fieldset: "appearance",
    },
    {
      name: "colorButtonText",
      type: "color",
      title: "Button text color",
      fieldset: "appearance",
    },
    {
      name: "colorButtonSecondBg",
      type: "color",
      title: "Second Button background color",
      fieldset: "appearance",
    },
    {
      name: "colorButtonSecondText",
      type: "color",
      title: "Second Button text color",
      fieldset: "appearance",
    },
    {
      type: "string",
      name: "borderRadius",
      fieldset: "appearance",
    },
    {
      title: "Text size",
      name: "textVariant",
      type: "string",
      fieldset: "appearance",
      options: {
        list: [
          { title: "Large", value: "introText" },
          { title: "Medium", value: "introSub" },
          { title: "Small", value: "introText" },
        ],
        layout: "radio",
      },
    },
    {
      title: "Heading type",
      name: "heading",
      type: "string",
      fieldset: "appearance",
      options: {
        list: [
          { title: "h1", value: "h1" },
          { title: "h2", value: "h2" },
          { title: "h3", value: "h3" },
          { title: "h4", value: "h4" },
          { title: "h5", value: "h5" },
          { title: "h6", value: "h6" },
        ],
        layout: "radio",
      },
    },
    {
      title: "Heading size",
      name: "headingVariant",
      type: "string",
      fieldset: "appearance",
      options: {
        list: [
          { title: "h1", value: "h1" },
          { title: "h2", value: "h2" },
          { title: "h3", value: "h3" },
          { title: "h4", value: "h4" },
          { title: "h5", value: "h5" },
          { title: "h6", value: "h6" },
        ],
        layout: "radio",
      },
    },
  ],
};
