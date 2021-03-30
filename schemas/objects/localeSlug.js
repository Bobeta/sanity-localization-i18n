import locales from "../../config/locales";

export default {
  name: "localeSlug",
  title: "Translatable slug",
  type: "object",
  fields: locales.map((locale) => ({
    title: locale.label,
    name: locale.code.substr(0, 2),
    type: "slug",
    options: {
      source: "title." + locale.code.substr(0, 2),
      maxLength: 96,
    },
  })),
};
