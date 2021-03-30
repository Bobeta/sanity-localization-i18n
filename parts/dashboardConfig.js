export default {
  widgets: [
    {
      name: "document-list",
      options: {
        title: "Last edited landing pages",
        order: "_updatedAt desc",
        types: ["page"],
      },
      layout: {
        width: "auto",
        height: "auto",
      },
    },
    {
      name: "document-list",
      options: {
        title: "Last edited posts",
        order: "_updatedAt desc",
        types: ["post"],
      },
    },
    {
      name: "document-list",
      options: {
        title: "Help Center",
        order: "_updatedAt desc",
        types: ["help"],
      },
    },
    {
      name: "notes",
      options: {
        title: "Notes",
        backgroundColor: "#1D3549",
        color: "#ffffff",
      },
      layout: {
        width: "medium",
      },
    },
    {
      name: "netlify",
      options: {
        title: "CMS Deployment",
        sites: [
          // Add Sanity Build
          {
            title: "Landing Page",
            apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID,
            buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILDHOOK,
            name: process.env.SANITY_STUDIO_NETLIFY_NAME_LANDING,
          },
        ],
      },
      layout: {
        width: "small",
      },
    },
    {
      name: "google-analytics",
      layout: {
        width: "medium",
      },
      options: {
        title: "Last month",
        gaConfig: {
          reportType: "ga",
          query: {
            dimensions: "ga:date",
            metrics: "ga:users, ga:sessions, ga:newUsers",
            "start-date": "30daysAgo",
            "end-date": "yesterday",
          },
          chart: {
            type: "LINE",
            options: {
              width: "100%",
            },
          },
        },
      },
    },
    {
      name: "google-analytics",
      layout: {
        width: "medium",
      },
      options: {
        title: "Visitors by country",
        gaConfig: {
          reportType: "ga",
          query: {
            dimensions: "ga:country",
            metrics: "ga:users",
            "start-date": "30daysAgo",
            "end-date": "yesterday",
          },
          chart: {
            type: "GEO",
            width: "100%",
          },
        },
      },
    },
  ],
};
