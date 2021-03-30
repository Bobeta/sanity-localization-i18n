export default {
  type: "object",
  name: "migratePicker",
  title: "Migrate Picker",
  fields: [
    {
      name: "url",
      title: "url",
      type: "string",
    },
    {
      type: "array",
      name: "items",
      of: [{ type: "migratePickerItems" }],
    },
  ],
};
