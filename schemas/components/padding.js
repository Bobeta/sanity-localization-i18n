export default {
  type: "object",
  title: "Space",
  name: "padding",
  fieldsets: [
    {
      name: "space",
      title: "Space",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      title: "top",
      name: "top",
      type: "number",
      fieldset: "space",
      options: {
        list: [
          { title: "1", value: 1 },
          { title: "2", value: 2 },
          { title: "3", value: 3 },
          { title: "4", value: 4 },
          { title: "5", value: 5 },
          { title: "6", value: 6 },
          { title: "7", value: 7 },
          { title: "8", value: 8 },
        ],
      },
    },
    {
      title: "bottom",
      name: "bottom",
      type: "number",
      fieldset: "space",
      options: {
        list: [
          { title: "1", value: 1 },
          { title: "2", value: 2 },
          { title: "3", value: 3 },
          { title: "4", value: 4 },
          { title: "5", value: 5 },
          { title: "6", value: 6 },
          { title: "7", value: 7 },
          { title: "8", value: 8 },
        ],
      },
    },
  ],
};
