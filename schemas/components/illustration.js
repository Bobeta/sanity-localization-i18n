export default {
  type: "object",
  name: "illustration",
  title: "Image",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "mainImage",
    },
    {
      type: "boolean",
      name: "noLazyLoad",
      title: "Dont lazyload",
      description:
        "Use if the image shouldn't be sourced and not lazyloaded (for instance if it's a svg)",
    },
    {
      name: "maxWidth",
      title: "Max Width",
      type: "string",
    },
    {
      name: "centered",
      title: "Center Align",
      type: "boolean",
    },
    {
      name: "rounded",
      title: "Rounded corners",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      image: "image",
    },
    prepare({ image }) {
      if (!image) {
        return { title: "Illustration with no image" };
      }
      return {
        title: `Illustration`,
        subtitle: `${
          image.caption || image.alt || "Missing alt text"
        } | Size: ${image.size || "default"}`,
        media: image,
      };
    },
  },
};
