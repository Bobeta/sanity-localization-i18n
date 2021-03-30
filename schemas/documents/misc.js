export default {
    name: "misc",
    title: "Misc",
    type: "document",
    fieldsets: [
      { name: "forms", title: "Forms" },
      { name: "others", title: "Others" },
    ],
    fields: [
      {
        name: "name",
        title: "Name label",
        type: "localeString",
        fieldset: "forms",
      },
      {
        name: "email",
        title: "Email label",
        type: "localeString",
        fieldset: "forms",
      },
      {
        name: "message",
        title: "Message (reason) label",
        type: "localeString",
        fieldset: "forms",
      },
      {
        name: "submit",
        title: "Submit button text",
        type: "localeString",
        fieldset: "forms",
      },
    ],
  }
  