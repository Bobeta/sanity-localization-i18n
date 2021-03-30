export default {
  type: "object",
  name: "button",
  title: "Button",
  fields: [
    {
      name: "colorBg",
      type: "color",
      title: "Background color",
    },
    {
      type: "string",
      name: "buttonText",
    },
    {
      type: "string",
      name: "buttonUrl",
    },
    {
      type: "boolean",
      name: "centered",
    },
    {
      title: "Button type",
      name: "buttonType",
      type: "string",
      options: {
        list: [
          { title: "primary", value: "buttons.cta" },
          { title: "secondary", value: "buttons.secondary" },
        ],
        layout: "radio",
      },
    },
  ],
};
