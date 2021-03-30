export default {
  type: "object",
  name: "flex",
  title: "Columns - Flex",
  fields: [
    {
      type: "array",
      name: "rows",
      of: [{ type: "flexBlockContent" }],
    },
    // {
    //   name: "container",
    //   title: "Contained width on page",
    //   type: "boolean",
    // },
    {
      name: "colorBg",
      type: "color",
      title: "Background color",
    },
    {
      name: "justifyContent",
      type: "string",
      title: "Justify Content",
    },
    {
      name: "alignItems",
      type: "string",
      title: "Align Items",
    },
  ],
};
