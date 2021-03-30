export default {
  title: "Menu items information",
  name: "menuItem",
  type: "object",
  fieldsets: [
    {
      title: "Link",
      name: "link",
      description: "Only the first value of these will be used",
    },
  ],
  fields: [
    {
      title: "Menu item title",
      name: "menuItemName",
      type: "string",
    },
    // {
    //     title: 'Page or Post',
    //     name: 'pagePostPath',
    //     fieldset: 'link',
    //     type: 'reference',
    //     to: [
    //         {type: 'page'},
    //         {type: 'post'}
    //     ]
    // },
    {
      title: "Path to page or post",
      name: "menuItemSlug",
      type: "string",
      fieldset: "link",
      description: "Example: /en/discover",
    },
    {
      title: "Or external link",
      name: "menuItemExternalLink",
      type: "string",
      fieldset: "link",
      description: "Example: https://www.facebook.com",
    },
  ],
};
