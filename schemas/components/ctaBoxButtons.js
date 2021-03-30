export default {
  type: "object",
  name: "ctaBoxButtons",
  title: "Box with CTA",
  fieldsets: [
    {
      name: "buttons",
      title: "Buttons",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
  ],
  fields: [
    {
      type: "color",
      name: "colorBg",
    },
    {
      type: "infoText",
      name: "info",
    },
    {
      type: "string",
      name: "primaryButtonText",
      title: "Primary Button Text",
      fieldset: "buttons",
    },
    {
      type: "string",
      name: "primaryButtonUrl",
      title: "Primary Button URL",
      fieldset: "buttons",
    },
    {
      type: "string",
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      fieldset: "buttons",
    },
    {
      type: "string",
      name: "secondaryButtonUrl",
      title: "Secondary Button URL",
      fieldset: "buttons",
    },
  ],
};
