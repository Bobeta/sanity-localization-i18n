export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
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
      name: "headerButtonText",
      title: "Header Button Text",
      type: "localeString",
    },
    {
      name: "headerButtonUrl",
      title: "Header Button URL",
      type: "localeString",
    },
    {
      name: "headerBreakpoint",
      title: "Breakpoint in pixels before switching to mobile menu",
      type: "localeString",
    },
    {
      name: "headerSecondButtonText",
      title: "Header Login Text",
      type: "localeString",
    },
    {
      name: "headerSecondButtonUrl",
      title: "Header Login URL",
      type: "localeString",
    },
    {
      name: "footerLanguageTitle",
      title: "Footer Language title",
      type: "localeString",
    },
    {
      name: "footerCopyright",
      title: "Footer Copyright text",
      type: "localeString",
    },
    {
      title: "Open graph",
      name: "openGraph",
      type: "openGraph",
      fieldset: "meta",
    },
  ],
};
