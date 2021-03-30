export default {
  type: "object",
  name: "infoSection",
  title: "Text section with image",
  fieldsets: [
    {
      name: "editor",
      title: "Wrap with editor",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
  ],
  fields: [
    {
      type: "boolean",
      name: "imageFirst",
      title: "Show image before content",
    },
    {
      type: "illustration",
      name: "image",
    },
    {
      type: "boolean",
      name: "shadowImage",
      title: "Add shadow to image",
    },
    {
      type: "boolean",
      name: "editorWrap",
      fieldset: "editor",
    },
    {
      type: "string",
      name: "windowText",
      fieldset: "editor",
    },
    {
      type: "infoText",
      name: "info",
    },
  ],
  preview: {
    select: {
      title: "info.headline",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
};
