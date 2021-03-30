import { FaTags } from "react-icons/fa";

export default {
  name: "tag",
  title: "Tag",
  icon: FaTags,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
