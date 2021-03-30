export default {
  name: "mediaBank",
  type: "document",
  title: "Media Bank",
  // __experimental_actions: ["update" /* 'create', 'delete', 'publish' */],
  fieldsets: [
    {
      name: "meta",
      title: "Meta information",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
  ],
  fields: [
    {
      title: "Open graph",
      name: "openGraph",
      type: "openGraph",
      fieldset: "meta",
    },
  ],
};
