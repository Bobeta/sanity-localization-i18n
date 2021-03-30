export default {
  type: "object",
  name: "gridReference",
  title: "Grid: References",
  fields: [
    {
      type: "color",
      name: "colorBg",
      title: "Background color",
    },
    {
      type: "array",
      name: "rows",
      of: [{ type: "gridReferenceCustomer" }],
    },
  ],
};
