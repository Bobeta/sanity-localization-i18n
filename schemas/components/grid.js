export default {
  type: "object",
  name: "grid",
  title: "Columns - Grid",
  fieldsets: [
    {
      name: "gap",
      title: "Gap",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 4,
      },
    },
    {
      name: "column",
      title: "Columns",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 4,
      },
    },
  ],
  fields: [
    {
      type: "number",
      name: "gapMobile",
      fieldset: "gap",
      title: "Mobile",
    },
    {
      type: "number",
      name: "gapTablet",
      fieldset: "gap",
      title: "Tablet",
    },
    {
      type: "number",
      name: "gapDesktop",
      fieldset: "gap",
      title: "Desktop",
    },
    {
      type: "number",
      name: "gapDesktopLarge",
      fieldset: "gap",
      title: "Desktop Large",
    },
    {
      type: "number",
      name: "columnsMobile",
      fieldset: "column",
      title: "Mobile",
    },
    {
      type: "number",
      name: "columnsTablet",
      fieldset: "column",
      title: "Tablet",
    },
    {
      type: "number",
      name: "columnsDesktop",
      fieldset: "column",
      title: "Desktop",
    },
    {
      type: "number",
      name: "columnsDesktopLarge",
      fieldset: "column",
      title: "Large desktop",
    },
    {
      name: "colorBg",
      type: "color",
      title: "Background color",
    },
    {
      name: "container",
      title: "Contained width on page",
      type: "boolean",
    },
    {
      name: "roundedCorners",
      title: "Rounded corners",
      type: "boolean",
    },
    {
      type: "array",
      name: "rows",
      of: [{ type: "gridBlockContent" }],
    },
  ],
};
