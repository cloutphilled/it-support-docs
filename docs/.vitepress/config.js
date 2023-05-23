export default {
    themeConfig: {
      logo: "frb_byvaaben_transparent.png",
      siteTitle: "IT-support docs",
      nav: [
        { text: "About", link: "/about" },
        { text: "Contact", link: "/contact" },
    //     { text: "Guide", link: "/guide" },
    //     { text: "Configs", link: "/configs" },
    //     { text: "Changelog",
    //     items: [
    //         {text: "v0.0.1", link: "/item-1"},
    //         // {text: "v0.0.2", link: "/item-2"},
    //         // {text: "v0.0.3", link: "/item-3"},
    //     ],
    // },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/cloutphilled" },
        // { icon: "twitter", link: "https://twitter.com/" },
        // { icon: "discord", link: "..." },
      ],

      sidebar: [
        {
            text: "Reset af Passwords",
            collapsible: true,
            items: [
                { text: "Reset AD password", link: "/passwords/ad_password/reset_ad_password" },
                { text: "Reset KMD password", link: "/passwords/kmd_password/reset_kmd_password" },
            ],
        },
        {
            text: "Outlook plugins",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
            ],
        },
        {
            text: "Outlook",
            collapsible: true,
            items: [
                { text: "Tilføj fællesmail", link: "/outlook/faellesmail" },
                { text: "Getting Started", link: "/getting-started" },
            ],
        },
        {
          text: "Print",
          collapsible: true,
          items: [
            { text: "Placeholder", link: "" },
          ]
        },
      ],
      footer: {
        // message: "Released under the MIT License.",
        copyright: "Copyright © Phillip Friis Petersen",
      },
    },
  };

