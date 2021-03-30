export default {
  type: "object",
  name: "showcaseTemplate",
  title: "Theme Showcase",
  fieldsets: [
    {
      name: "bgImage",
      title: "Background image",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
    {
      name: "contentInfo",
      title: "Content information",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
    {
      name: "templateButtons",
      title: "CTA Buttons",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
  ],
  fields: [
    {
      type: "illustration",
      name: "bgImage",
      fieldset: "bgImage",
    },
    {
      type: "infoSection",
      name: "info",
      fieldset: "contentInfo",
    },
    {
      type: "array",
      name: "items",
      title: "Template Attributes",
      of: [
        {
          type: "pricingPlanItems",
        },
      ],
    },
    {
      type: "button",
      name: "firstButton",
      fieldset: "templateButtons",
    },
    {
      type: "button",
      name: "secondButton",
      fieldset: "templateButtons",
    },
  ],
};
