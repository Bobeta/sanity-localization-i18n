import locales from "../../config/locales"

export default {
  name: "localeMenu",
  title: "Translatable menus",
  type: "object",
  fields: locales.map(locale => ({
    type: "array",
    name: locale.code.substr(0, 2),
    title: locale.label,
    of: [{ type: 'menuItem' }]
  })),
}