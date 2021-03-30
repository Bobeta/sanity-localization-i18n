import defaultResolve, {
  DeleteAction,
  DuplicateAction,
} from "part:@sanity/base/document-actions";

import { addActions } from "sanity-plugin-content-calendar/build/register";

export default function resolveDocumentActions(props) {
  if (props.type === "siteSettings") {
    return [
      ...defaultResolve(props).filter(
        (Action) => Action !== DeleteAction && Action !== DuplicateAction
      ),
    ];
  }

  if (props.type === "mediaBank") {
    return [
      ...defaultResolve(props).filter(
        (Action) => Action !== DeleteAction && Action !== DuplicateAction
      ),
    ];
  }

  const actions = [...defaultResolve(props)];
  return addActions(props, actions);
  //   return [...defaultResolve(props)];
}
