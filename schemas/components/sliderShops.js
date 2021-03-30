export default {
  type: "object",
  name: "sliderShops",
  title: "Slider Shops",
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      name: "colorBg",
      type: "color",
      title: "Background color",
    },
    {
      type: "array",
      name: "rows",
      title: "Slide items",
      of: [{ type: "imageWithLink" }],
    },
  ],
};
