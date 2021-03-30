export default {
  type: "object",
  name: "pricingPlan",
  title: "Pricing Plan",
  fieldsets: [
    {
      name: "planFirst",
      title: "First Plan",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "titles",
      title: "Text Fields",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "planSecond",
      title: "Second Plan",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "planThird",
      title: "Third Plan",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      type: "string",
      name: "titleYearly",
      fieldset: "titles",
    },
    {
      type: "string",
      name: "titleQuarterly",
      fieldset: "titles",
    },
    {
      type: "string",
      name: "titleMonthly",
      fieldset: "titles",
    },
    {
      type: "string",
      name: "titleDisclaimer",
      fieldset: "titles",
    },
    {
      type: "string",
      name: "titlePerMonth",
      fieldset: "titles",
    },
    {
      type: "string",
      name: "titleWhenPaying",
      fieldset: "titles",
    },
    {
      type: "string",
      name: "titleFirstPlan",
      fieldset: "planFirst",
    },
    {
      type: "string",
      name: "titleSecondPlan",
      fieldset: "planSecond",
    },
    {
      type: "string",
      name: "titleThirdPlan",
      fieldset: "planThird",
    },
    {
      type: "array",
      name: "itemsFirstPlan",
      fieldset: "planFirst",
      of: [
        {
          type: "pricingPlanItems",
        },
      ],
    },
    {
      type: "array",
      name: "itemsSecondPlan",
      fieldset: "planSecond",
      of: [
        {
          type: "pricingPlanItems",
        },
      ],
    },
    {
      type: "array",
      name: "itemsThirdPlan",
      fieldset: "planThird",
      of: [
        {
          type: "pricingPlanItems",
        },
      ],
    },
  ],
};
