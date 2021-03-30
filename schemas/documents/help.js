import { FaLifeRing } from "react-icons/fa";

export default {
  name: "help",
  title: "Help",
  icon: FaLifeRing,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "slug",
      title: "Path",
      type: "localeSlug",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "body",
      title: "Content",
      type: "localeBlockContent",
    },
  ],

  preview: {
    select: {
      title: "title.en",
      author: "author.name",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
