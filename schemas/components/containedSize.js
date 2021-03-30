export default {
  type: "object",
  name: "containedSize",
  title: "Contained Box",
  fields: [
    {
      type: "array",
      name: "rows",
      of: [{ type: "flexBlockContent" }],
    },
    {
      name: "container",
      title: "Contained width on page",
      type: "boolean",
    },
    {
      name: "maxWidth",
      title: "Max Width",
      type: "string",
    },
    {
      name: "centered",
      title: "Center Align",
      type: "boolean",
    },
    {
      name: "colorBg",
      type: "color",
      title: "Background color",
    },
  ],
};
