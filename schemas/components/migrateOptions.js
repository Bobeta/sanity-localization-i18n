export default {
  type: "object",
  name: "migrateOptions",
  title: "Migrate Options",
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      name: "colorBg",
      type: "color",
      title: "Background color",
    },
    {
      type: "array",
      name: "rows",
      of: [{ type: "imageWithLink" }],
    },
  ],
};
