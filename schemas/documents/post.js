import FionaPlaceholder from "part:sanity-plugin-asset-source/fiona-placeholder";
import MediaAssetSource from "part:sanity-plugin-media/asset-source";
import { FaRegNewspaper } from "react-icons/fa";

export default {
  name: "post",
  title: "Post",
  icon: FaRegNewspaper,
  type: "document",
  fieldsets: [
    {
      name: "meta",
      title: "Meta information",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      type: "boolean",
      name: "disableTitle",
    },
    {
      name: "slug",
      title: "Path",
      type: "localeSlug",
    },
    {
      name: "mainImage",
      title: "Featured image",
      type: "localeImage",
      options: {
        hotspot: true,
        sources: [MediaAssetSource, FionaPlaceholder],
      },
    },
    {
      name: "imageAlt",
      title: "Image alt text",
      type: "localeString",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "body",
      title: "Content",
      type: "localeBlockContent",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "localeBlockContent",
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      title: "Open graph",
      name: "openGraph",
      type: "openGraph",
      fieldset: "meta",
    },
  ],

  preview: {
    select: {
      title: "title.sv",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
