export default {
  name: "pageContent",
  title: "Page Content",
  type: "object",
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
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "slug",
      title: "Path",
      type: "localeSlug",
    },
    {
      name: "body",
      title: "Content",
      type: "localeBlockContent",
    },
    {
      title: "Open graph",
      name: "openGraph",
      type: "openGraph",
      fieldset: "meta",
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
  ],
};
