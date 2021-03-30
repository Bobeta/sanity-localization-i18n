export default {
  type: "object",
  name: "showcaseFeatures",
  title: "Show Features",
  fields: [
    {
      type: "array",
      name: "items",
      of: [{ type: "showcaseFeaturesItems" }],
    },
  ],
};
