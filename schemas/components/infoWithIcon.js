import { BsCheckCircle } from "react-icons/bs";
import {
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiFillCheckCircle,
} from "react-icons/ai";

export default {
  type: "object",
  name: "infoWithIcon",
  title: "Icon with content",
  fields: [
    {
      type: "boolean",
      name: "iconAfter",
      title: "Show icon after content",
    },
    {
      type: "string",
      name: "title",
    },
    {
      type: "blockContent",
      name: "advancedDescription",
      title: "Content",
    },
    {
      name: "iconChoice",
      title: "Icon Choice",
      type: "visualOptions",
      options: {
        showTooltip: true,
        optionSize: "small",
        list: {
          BsCheckCircle: {
            name: "BsCheckCircle",
            icon: BsCheckCircle,
            default: true,
          },
          AiOutlineCheck: {
            name: "AiOutlineCheck",
            icon: AiOutlineCheck,
          },
          AiOutlineCheckCircle: {
            name: "AiOutlineCheckCircle",
            icon: AiOutlineCheckCircle,
          },
          AiFillCheckCircle: {
            name: "AiFillCheckCircle",
            icon: AiFillCheckCircle,
          },
        },
      },
    },
    {
      name: "colorBg",
      type: "color",
      title: "Background color",
    },
    {
      name: "colorTitle",
      type: "color",
      title: "Title color",
    },
    {
      name: "colorIcon",
      type: "color",
      title: "Icon color",
    },
    {
      title: "Align icon to content",
      name: "alignItems",
      type: "string",
      options: {
        list: [
          { title: "Start", value: "start" },
          { title: "Center", value: "center" },
          { title: "End", value: "end" },
        ],
        layout: "radio",
      },
    },
    {
      title: "Space between icon and content",
      name: "iconSpace",
      type: "string",
      options: {
        list: [
          { title: "extra Large", value: "4" },
          { title: "Large", value: "3" },
          { title: "Medium", value: "2" },
          { title: "Small", value: "1" },
        ],
        layout: "radio",
      },
    },
  ],
  preview: {
    select: {
      title: "info.headline",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
};
