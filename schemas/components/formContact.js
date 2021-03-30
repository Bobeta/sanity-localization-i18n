export default {
  type: "object",
  name: "formContact",
  title: "Contact",
  fields: [
    {
      type: "string",
      name: "buttonText",
    },
    {
      type: "boolean",
      name: "displayArea",
      title: "Show Textarea",
    },
    {
      type: "string",
      name: "areaText",
      title: "Placeholder for textarea",
    },
    {
      type: "array",
      name: "rows",
      title: "Fields",
      of: [{ type: "formFields" }],
    },
  ],
};
