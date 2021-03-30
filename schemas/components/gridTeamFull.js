export default {
  type: "object",
  name: "gridTeamFull",
  title: "Employees",
  fields: [
    {
      type: "array",
      name: "rows",
      title: "Employee",
      of: [{ type: "gridTeamEmployees" }],
      // options: {
      //   canDuplicate: "text",
      // },
    },
  ],
};
