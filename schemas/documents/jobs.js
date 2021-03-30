import { MdWork } from "react-icons/md";

export default {
  name: "jobs",
  title: "Jobs",
  icon: MdWork,
  type: "document",
  fieldsets: [
    {
      name: "pageSettings",
      title: "Settings",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
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
      title: "Body",
      type: "localeBlockContent",
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      name: "settingsNavBg",
      title: "Main Navigation backgroundcolor",
      type: "localeColor",
      fieldset: "pageSettings",
    },
    {
      name: "settingsNavColor",
      title: "Main navigation textcolor",
      type: "localeColor",
      fieldset: "pageSettings",
    },
    {
      title: "Contained Width",
      name: "container",
      type: "string",
      fieldset: "pageSettings",
      options: {
        list: [
          { title: "Fullwidth", value: "fullwidth" },
          { title: "Container", value: "container" },
          { title: "Smaller Container", value: "containerSmall" },
          { title: "Read width", value: "read" },
        ],
        layout: "radio",
      },
    },
    {
      title: "Open graph",
      name: "openGraph",
      type: "openGraph",
      fieldset: "meta",
    },
    {
      name: "Sitemap",
      type: "boolean",
      fieldset: "pageSettings",
    },
  ],

  preview: {
    select: {
      title: "title.en" == !"Untitled" ? "title.en" : "title.sv",
    },
  },
};
