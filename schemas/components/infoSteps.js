export default {
  type: "object",
  name: "infoSteps",
  title: "Steps",
  fields: [
    {
      type: "infoText",
      name: "info",
    },
    {
      type: "array",
      name: "rows",
      of: [
        {
          type: "infoSection",
          name: "infoSection",
        },
      ],
      options: {
        canDuplicate: "infoSection",
      },
    },
  ],
};
