export default {
  type: "object",
  name: "logoList",
  title: "List of logos",
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      type: "array",
      name: "rows",
      of: [{ type: "image" }],
    },
  ],
};
