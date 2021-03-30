import React from "react";

import { FaEdit, FaEye } from "react-icons/fa";

import S from "@sanity/desk-tool/structure-builder";

import { GoSettings } from "react-icons/go";
import { MdPermMedia } from "react-icons/md";
import BlogStructure from "./src/structure/blog";
import PageStructure from "./src/structure/page";
import SiteSettings from "./src/structure/settings";
import SeoPreview from "./src/previews/seo/SeoPreviews";

import IframePreview from "./src/previews/IframePreview";

const hiddenDocTypes = (listItem) =>
  !["siteSettings", "post", "author", "category", "page", "mediaBank"].includes(
    listItem.getId()
  );

const remoteURL = "";
const localURL = "http://localhost:8000/";

const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === "page") {
    return S.document().views([
      S.view.form().icon(FaEdit).title("Edit"),
      S.view
        .component(IframePreview)
        .options({ previewURL, selectedLanguage: "en" })
        .title("Eng")
        .icon(FaEye),
      S.view
        .component(IframePreview)
        .options({ previewURL, selectedLanguage: "sv" })
        .title("Swe")
        .icon(FaEye),
      S.view
        .component(IframePreview)
        .options({ previewURL, selectedLanguage: "no" })
        .title("Nor")
        .icon(FaEye),
      S.view
        .component(IframePreview)
        .options({ previewURL, selectedLanguage: "da" })
        .title("Dan")
        .icon(FaEye),
      S.view
        .component(SeoPreview)
        .options({ previewURL })
        .icon(FaEye)
        .title("SEO Preview"),
    ]);
  }
};

export default () =>
  S.list()
    .title("Content")
    .items([
      PageStructure,
      BlogStructure,
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.divider(),
      S.listItem()
        .title("Mediabank")
        .icon(MdPermMedia)
        .child(S.document().schemaType("mediaBank").documentId("mediaBank")),
      S.listItem()
        .title("Settings")
        .icon(GoSettings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
    ]);

// import S from "@sanity/desk-tool/structure-builder";
// import { GoBrowser as PageIcon, GoHome, GoSettings } from "react-icons/go";
// import blog from "./src/structure/blog";
// import landingPages from "./src/structure/landingPages";
// import PreviewIFrame from "./src/components/previewIFrame";

// const hiddenDocTypes = (listItem) =>
//   ![
//     "route",
//     "navigationMenu",
//     "post",
//     "page",
//     "siteSettings",
//     "author",
//     "category",
//   ].includes(listItem.getId());

// export default () =>
//   S.list()
//     .title("Content")
//     .items([
//       S.documentListItem()
//         .schemaType("siteSettings")
//         .title("Site settings")
//         .icon(GoSettings)
//         .child(
//           S.document()
//             .schemaType("siteSettings")
//             .documentId("siteSettings")
//             .views([S.view.form(), PreviewIFrame()])
//         ),
//       S.documentListItem()
//         .title("Frontpage")
//         .schemaType("page")
//         .icon(GoHome)
//         .child(
//           S.document()
//             .schemaType("page")
//             .documentId("frontpage")
//             .views([S.view.form(), PreviewIFrame()])
//         ),
//       blog,
//       landingPages,
//       // This returns an array of all the document types
//       // defined in schema.js. We filter out those that we have
//       // defined the structure above
//       ...S.documentTypeListItems().filter(hiddenDocTypes),
//     ]);
