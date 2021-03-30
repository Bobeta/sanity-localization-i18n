export default {
  type: "object",
  name: "showcaseIntegrations",
  title: "Showcase Integrations",
  fields: [
    {
      type: "array",
      name: "rows",
      title: "Integrations",
      of: [{ type: "showcaseIntegrationsCustomer" }],
      // options: {
      //   canDuplicate: "text",
      // },
    },
    {
      name: "colorBg",
      type: "color",
      title: "Background color",
    },
  ],
};
