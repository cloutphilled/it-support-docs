export default {
    themeConfig: {
      logo: "/frb_byvaaben_transparent.png",
      siteTitle: "Adocs",
      nav: [
        { text: "About", link: "/about" },
        { text: "Contact", link: "/contact" },
        { text: "Guide", link: "/guide" },
        { text: "Configs", link: "/configs" },
        { text: "Changelog",
        items: [
            {text: "v0.0.1", link: "/item-1"},
            {text: "v0.0.2", link: "/item-2"},
            {text: "v0.0.3", link: "/item-3"},
        ],
    },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/cloutphilled" },
        { icon: "twitter", link: "https://twitter.com/" },
        { icon: "discord", link: "..." },
      ],

      sidebar: [
        {
            text: "Section A",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/introduction"},
                { text: "Getting Started", link: "/getting-started" },
            ],
        },
        {
            text: "Section B",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
            ],
        },
        {
            text: "Section C",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
            ],
        },
      ],
    },
  };

