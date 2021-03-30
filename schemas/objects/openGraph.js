export default {
  title: "Open Graph",
  name: "openGraph",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "localeString",
      description: "This will override the page title",
    },
    {
      title: "Description",
      name: "description",
      type: "localeText",
    },
    {
      title: "Image",
      description: "Facebook recommends 1200x630 (will be auto resized)",
      name: "image",
      type: "localeImage",
    },
    /*
      // Todo: Add video to Open Graph tags
      {
        name: 'video',
        title: 'Video',
        type: 'mux.video'
      }
      */
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
