export default {
  type: "object",
  name: "textWithIllustration",
  title: "Text with illustration",
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      type: "blockContent",
      name: "text",
    },
    {
      type: "illustration",
      name: "illustration",
    },
  ],
};
