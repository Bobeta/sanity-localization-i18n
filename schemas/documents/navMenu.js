import { HiOutlineMenuAlt1 } from "react-icons/hi";

export default {
  type: "document",
  name: "navigationMenu",
  title: "Navigation Menu",
  icon: HiOutlineMenuAlt1,
  fields: [
    {
      name: "menuName",
      title: "Menus name",
      type: "localeString",
    },
    {
      title: "Associate menu with placement",
      name: "menuPlacement",
      type: "string",
      options: {
        list: [
          { title: "Main Menu", value: "menuMain" },
          { title: "Social Media", value: "menuSocial" },
          { title: "Footer Menu 1st section", value: "menuFooterOne" },
          { title: "Footer Menu 2nd section", value: "menuFooterTwo" },
          { title: "Footer Menu 3rd section", value: "menuFooterThree" },
          { title: "Footer Menu 4th section", value: "menuFooterFour" },
        ],
        layout: "dropdown",
      },
    },
    {
      type: "localeMenu",
      name: "menuItems",
    },
  ],

  preview: {
    select: {
      title: "menuName.en",
    },
  },
};
