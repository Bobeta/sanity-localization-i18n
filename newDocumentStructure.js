import S from "@sanity/base/structure-builder";

const personTemplateId = "personWithRole";
const roles = [
  { name: "page", title: "Page" },
  { name: "post", title: "Blog Post" },
];

const hiddenDocTypes = (listItem) =>
  ![
    "siteSettings",
    "navigationMenu",
    "author",
    "category",
    "mediaBank",
  ].includes(listItem.getId());

export default [
  //   ...roles.map((role) =>
  //     S.initialValueTemplateItem(personTemplateId, { role: role.name })
  //       .id(`personRole-${role.name}`)
  //       .title(role.title)
  //   ),

  ...S.defaultInitialValueTemplateItems().filter(hiddenDocTypes),
];
