import S from "@sanity/desk-tool/structure-builder";
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
  GoPerson as AuthorIcon,
} from "react-icons/go";
import { RiPagesFill } from "react-icons/ri";

// import PreviewIFrame from '../../src/components/previewIFrame'

const PageStructure = S.listItem()
  .title("Pages")
  .icon(RiPagesFill)
  .child(
    S.list()
      .title("Pages")
      .items([
        S.listItem()
          .title("Bransch")
          .schemaType("page")
          .icon(RiPagesFill)
          .child(
            S.documentList("page")
              .title("Bransch pages")
              .menuItems(S.documentTypeList("page").getMenuItems())
              .filter('_type == "page" && pageCategory == "Bransch"')
            // .child((documentId) =>
            //   S.document().documentId(documentId).schemaType("page")
            // )
          ),
        S.listItem()
          .title("Målgrupp")
          .schemaType("page")
          .icon(RiPagesFill)
          .child(
            S.documentList("page")
              .title("Målgrupp pages")
              .menuItems(S.documentTypeList("page").getMenuItems())
              .filter(
                '_type == "page" && pageCategory == "Målgrupp" || pageCategory == "målgrupp" '
              )
          ),
        S.listItem()
          .title("Reseller Partners")
          .schemaType("page")
          .icon(RiPagesFill)
          .child(
            S.documentList("page")
              .title("Resellerpartners pages")
              .menuItems(S.documentTypeList("page").getMenuItems())
              .filter(
                '_type == "page" && pageCategory == "Resellerpartners" || pageCategory == "resellerpartners" '
              )
          ),
        S.listItem()
          .title("Specialist Partners")
          .schemaType("page")
          .icon(RiPagesFill)
          .child(
            S.documentList("page")
              .title("Specialistpartners pages")
              .menuItems(S.documentTypeList("page").getMenuItems())
              .filter(
                '_type == "page" && pageCategory == "Specialistpartners" || pageCategory == "specialistpartners" '
              )
          ),
        S.listItem()
          .title("Education Partners")
          .schemaType("page")
          .icon(RiPagesFill)
          .child(
            S.documentList("page")
              .title("Educationpartners pages")
              .menuItems(S.documentTypeList("page").getMenuItems())
              .filter(
                '_type == "page" && pageCategory == "Educationpartners" || pageCategory == "educationpartners" '
              )
          ),
        S.listItem()
          .title("Landing")
          .schemaType("page")
          .icon(RiPagesFill)
          .child(
            S.documentList("page")
              .title("Landing pages")
              .menuItems(S.documentTypeList("page").getMenuItems())
              .filter('_type == "page" && defaultPage != true')
            // .child((documentId) =>
            //   S.document().documentId(documentId).schemaType("page")
            // )
          ),
        S.listItem()
          .title("Standard")
          .schemaType("page")
          .child(
            S.documentList("page")
              .title("Standard pages")
              .menuItems(S.documentTypeList("page").getMenuItems())
              .filter('_type == "page" && defaultPage == true')
            // .child((documentId) =>
            //   S.document().documentId(documentId).schemaType("page")
            // )
          ),
        S.divider(),
        S.documentTypeListItem("page").title("All").icon(AllIcon),
      ])
  );

export default PageStructure;
