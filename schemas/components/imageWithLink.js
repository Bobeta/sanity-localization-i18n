export default {
  type: "object",
  name: "imageWithLink",
  title: "Customer",
  fields: [
    {
      title: "Name",
      name: "title",
      type: "string",
    },
    {
      type: "illustration",
      name: "image",
    },
    {
      title: "Optional Link",
      name: "url",
      type: "string",
    },
  ],
};
