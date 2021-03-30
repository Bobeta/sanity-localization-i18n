import React from "react";
import { FaWindowRestore } from "react-icons/fa";

// import { MediaEditor } from "sanity-plugin-asset-source-ogimage";
// import MediaAssetSource from "part:sanity-plugin-media/asset-source";
// import OgImageEditor from "../components/ogImageEditor";

export default {
  name: "page",
  title: "Page",
  icon: FaWindowRestore,
  type: "document",
  fieldsets: [
    {
      name: "pageSettings",
      title: "Settings",
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2,
      },
    },
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
    // {
    //   name: "ogImage",
    //   title: "Social sharing image",
    //   description: "optional but encouraged",
    //   type: "image",
    //   options: {
    //     sources: [
    //       MediaAssetSource,
    //       {
    //         name: "generate-ogimage",
    //         title: "Create image",
    //         component: (props) => (
    //           <MediaEditor
    //             {...props}
    //             layouts={[OgImageEditor]}
    //             dialog={{
    //               title: "Create image",
    //             }}
    //           />
    //         ),
    //         icon: () => <div>🎨</div>,
    //       },
    //     ],
    //   },
    // },
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
      name: "body",
      title: "Body",
      type: "localeBlockContent",
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      name: "settingsNavBg",
      title: "Main Navigation backgroundcolor",
      type: "localeColor",
      fieldset: "pageSettings",
    },
    {
      name: "settingsNavColor",
      title: "Main navigation textcolor",
      type: "localeColor",
      fieldset: "pageSettings",
    },
    {
      name: "container",
      title: "Contained width on page",
      type: "boolean",
      fieldset: "pageSettings",
    },
    {
      title: "Contained Width",
      name: "containerSize",
      type: "string",
      fieldset: "pageSettings",
      options: {
        list: [
          { title: "Fullwidth", value: "fullwidth" },
          { title: "Container", value: "container" },
          { title: "Smaller Container", value: "containerSmall" },
          { title: "Read width", value: "read" },
        ],
        layout: "radio",
      },
    },
    {
      name: "pageCategory",
      title: "Category Name",
      type: "string",
      fieldset: "pageSettings",
    },
    {
      name: "defaultPage",
      title: "Standard Page",
      type: "boolean",
      fieldset: "pageSettings",
    },
    {
      title: "Open graph",
      name: "openGraph",
      type: "openGraph",
      fieldset: "meta",
    },
    {
      name: "Sitemap",
      type: "boolean",
      fieldset: "pageSettings",
    },
  ],

  preview: {
    select: {
      title: "title.sv",
    },
  },
};
