export default {
  type: "object",
  name: "uiAdmin",
  title: "UI Admin",
  fields: [
    {
      type: "mainImage",
      name: "beforeImage",
    },
    {
      type: "mainImage",
      name: "afterImage",
    },
    {
      type: "string",
      name: "title",
    },
    {
      name: "colorBg",
      type: "color",
      title: "Background color",
    },
  ],
};
