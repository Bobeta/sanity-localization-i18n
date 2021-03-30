export default {
  type: "object",
  name: "sliderThemes",
  title: "Slider: Themes",
  fieldsets: [
    {
      name: "extraLink",
      title: "CTA Extra",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
  ],
  fields: [
    {
      type: "infoText",
      name: "info",
    },
    {
      type: "linkWithArrow",
      name: "linkWithArrow",
      fieldset: "extraLink",
    },
  ],
};
