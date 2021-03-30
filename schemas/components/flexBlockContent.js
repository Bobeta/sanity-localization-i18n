export default {
  type: "object",
  name: "flexBlockContent",
  title: "Flex Content",
  fieldsets: [
    {
      name: "width",
      title: "Width",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 3,
      },
    },
  ],
  fields: [
    {
      type: "string",
      name: "wPhoneSmall",
      title: "Phone(320px)",
      fieldset: "width",
    },
    {
      type: "string",
      name: "wPhablet",
      title: "Phablet(540px)",
      fieldset: "width",
    },
    {
      type: "string",
      name: "wTablet",
      title: "Tablet(735px)",
      fieldset: "width",
    },
    {
      type: "string",
      name: "wDesktop",
      title: "Desktop(1070px)",
      fieldset: "width",
    },
    {
      type: "string",
      name: "wDesktopMedium",
      title: "Desktop(1280px)",
      fieldset: "width",
    },
    {
      type: "string",
      name: "wDesktopLarge",
      title: "Desktop(1440px)",
      fieldset: "width",
    },
    {
      type: "blockContent",
      name: "body",
    },
  ],
};
