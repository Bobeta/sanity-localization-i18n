export default {
  type: "object",
  name: "customerStories",
  title: "Stories: Customers",
  fields: [
    {
      type: "number",
      name: "slideTimer",
      description: "In miliseconds, i.e 5 seconds should equal 5000",
    },
    {
      type: "array",
      name: "rows",
      of: [{ type: "infoSection" }],
    },
  ],
};
