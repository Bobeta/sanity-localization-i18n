import { FaTags } from "react-icons/fa";

export default {
  name: "category",
  title: "Category",
  icon: FaTags,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Path",
      type: "slug",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
