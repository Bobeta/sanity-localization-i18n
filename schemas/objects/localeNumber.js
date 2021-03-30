import locales from "../../config/locales";

export default {
  name: "localeNumber",
  title: "Translatable number",
  type: "object",
  fields: locales.map((locale) => ({
    title: locale.label,
    name: locale.code.substr(0, 2),
    type: "number",
  })),
};
