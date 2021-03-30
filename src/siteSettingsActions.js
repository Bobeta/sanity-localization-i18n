import { DeleteAction } from "part:@sanity/base/document-actions";
export function siteSettingsActions(props) {
  return {
    label: "Hello",
    onHandle: () => {
      window.alert("👋 Hello from custom action");
    },
  };
}
