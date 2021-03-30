export default {
  type: "object",
  name: "divBottom",
  title: "Bottom Divider",
  fields: [
    {
      name: "colorBg",
      type: "color",
      title: "background color",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "colorDivider",
      type: "color",
      title: "divider color",
    },
    {
      name: "colorUpperCylinder",
      type: "color",
      title: "upper cylinder color",
    },
    {
      name: "colorLowerCylinder",
      type: "color",
      title: "lower cylinder color",
    },
  ],
};
