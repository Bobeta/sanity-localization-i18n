import locales from "../../config/locales"

export default {
  name: "localeString",
  title: "Translatable string",
  type: "object",
  fields: locales.map(locale => ({
    title: locale.label,
    name: locale.code.substr(0, 2),
    type: "string",
  })),
}
