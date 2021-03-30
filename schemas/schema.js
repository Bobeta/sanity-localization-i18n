// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import localeString from "./objects/localeString";
import localeNumber from "./objects/localeNumber";
import localeText from "./objects/localeText";
import padding from "./components/padding";
import pricingPlanItems from "./components/pricingPlanItems";
import featureListItems from "./components/featureListItems";
import showcaseFeaturesItems from "./components/showcaseFeaturesItems";
import migratePickerItems from "./components/migratePickerItems";
import showcaseIntegrationsCustomer from "./components/showcaseIntegrationsCustomer";
import gridReferenceCustomer from "./components/gridReferenceCustomer";
import imageWithLink from "./components/imageWithLink";
import infoStepsCustomer from "./components/infoStepsCustomer";
import openGraph from "./objects/openGraph";
import localeColor from "./objects/localeColor";
import localeImage from "./objects/localeImage";
import localeMenu from "./objects/localeMenu";
import mainImage from "./objects/mainImage";
import siteSettings from "./documents/siteSettings";
import mediaBank from "./documents/mediaBank";
import blockContent from "./objects/blockContent";
import localeBlockContent from "./objects/localeBlockContent";
import category from "./documents/category";
import tag from "./documents/tag";
import post from "./documents/post";
import help from "./documents/help";
import navMenu from "./documents/navMenu";
import author from "./documents/author";
import pageContent from "./documents/pageContent";
import page from "./documents/page";
// import academy from "./documents/academy";
import jobs from "./documents/jobs";
// import misc from "./documents/misc";

import * as components from "./components";
import componentDefaultFields from "./components/_componentDefaultFields";
import localeSlug from "./objects/localeSlug";

const allComponents = Object.values(components).map((component) => {
  return {
    ...component,
    fields: componentDefaultFields.concat(component.fields),
  };
});

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      // The following are document types which will appear
      // in the studio.
      localeString,
      localeNumber,
      localeText,
      localeColor,
      localeImage,
      localeSlug,
      openGraph,
      localeMenu,
      pricingPlanItems,
      featureListItems,
      migratePickerItems,
      showcaseIntegrationsCustomer,
      gridReferenceCustomer,
      imageWithLink,
      infoStepsCustomer,
      padding,
      pageContent,
      page,
      jobs,
      post,
      author,
      category,
      tag,
      help,
      navMenu,
      mainImage,
      siteSettings,
      mediaBank,
      showcaseFeaturesItems,
      // When added to this list, object types can be used as
      // { type: 'typename' } in other document schemas
      blockContent,
      localeBlockContent,
    ])
    .concat(allComponents),
});
