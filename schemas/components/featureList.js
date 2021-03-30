export default {
  type: "object",
  name: "featureList",
  title: "Feature List",
  fields: [
    {
      type: "string",
      name: "firstOptionTitle",
      title: "First option title",
    },
    {
      type: "string",
      name: "secondOptionTitle",
      title: "Second option title",
    },
    {
      type: "string",
      name: "thirdOptionTitle",
      title: "Third option title",
    },
    {
      title: "Hide unchecked options",
      name: "hideUnchecked",
      type: "boolean",
    },
    {
      title: "Table size",
      name: "tableSize",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "1" },
          { title: "Medium", value: "2" },
          { title: "Large", value: "3" },
          { title: "Extra Large", value: "4" },
        ],
        layout: "radio",
      },
    },
    {
      type: "array",
      name: "items",
      of: [{ type: "featureListItems" }],
    },
  ],
};
