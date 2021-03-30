import S from "@sanity/desk-tool/structure-builder";
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
  GoPerson as AuthorIcon,
} from "react-icons/go";

import { FaTags } from "react-icons/fa";

// import PreviewIFrame from "../../src/components/previewIFrame";

const blog = S.listItem()
  .title("Blog")
  .icon(BlogIcon)
  .child(
    S.list()
      .title("/blog")
      .items([
        S.listItem()
          .title("Published posts")
          .schemaType("post")
          .icon(BlogIcon)
          .child(
            S.documentList("post")
              .title("Published posts")
              .menuItems(S.documentTypeList("post").getMenuItems())
              .filter(
                '_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))'
              )
              .child(
                (documentId) =>
                  S.document().documentId(documentId).schemaType("post")
                // .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem("post").title("All posts").icon(AllIcon),
        S.listItem()
          .title("Posts by category")
          .icon(FaTags)
          .child(
            S.documentTypeList("category")
              .title("Posts by category")
              .child((catId) =>
                S.documentList()
                  .schemaType("post")
                  .title("Posts")
                  .filter('_type == "post" && $catId in categories[]._ref')
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem("author").title("Authors").icon(AuthorIcon),
        S.documentTypeListItem("category").title("Categories"),
        S.documentTypeListItem("tag").title("Tags"),
      ])
  );

export default blog;
