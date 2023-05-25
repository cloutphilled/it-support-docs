export default {

    title: 'FRB IT-support documentation',
    description: 'Made by me',
    themeConfig: {
      logo: "frb_byvaaben_transparent.png",
      siteTitle: "IT-support docs",
      nav: [
        { text: "Hjem", link: "/index"},
        { text: "Om", link: "/about" },
        { text: "Kontakt", link: "/contact" },
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
          text: "Outlook / Word",
          collapsible: "true",
          items: [
              { text: "Autosvar fra fællespostkasse", link: "/outlook_word/autosvar/autosvar" },
              { text: "Deaktiverede Plugins", link: "/outlook_word/plugins/plugins" },
              { text: "Email signatur til fællespostkasse", link: "outlook_word/email_signatur_faelles/email_signatur_faelles" },
              { text: "Tilføj fællesmail", link: "/outlook_word/faellesmail/faellesmail" },
          ],
      },
        {
            text: "Passwords",
            collapsible: true,
            items: [
                { text: "Reset AD password", link: "/passwords/ad_password/reset_ad_password" },
                { text: "Reset KMD password", link: "/passwords/kmd_password/reset_kmd_password" },
            ],
        },
        
        {
          text: "Print",
          collapsible: true,
          items: [
            { text: "Installering af netværksprinter", link: "print/network_printer/network_printer"},
            { text: "Oprettelse af brugere på Kyocera-printer", link: "print/dokumentboks/dokumentboks"},
            { text: "Privat udskrift", link: "print/privat_udskrift/privat_udskrift" },
            { text: "Print til boks", link: "print/print_til_boks/print_til_boks" },
            
          ]
        },
        {
          text: "SBSYS",
          collapsible: true,
          items: [
            { text: "Mailboks opsætning", link: "sbsys/mailboks/mailboks" },
          ]
        },
        {
          text: "Skype",
          collapsible: true,
          items: [
              { text: "Nulstilling af Skype Profil", link: "skype/skype_profile/skype_profile" },
              { text: "Snapper", link: "skype/snapper/snapper" },
          ],
        },
      {
        text: "VPN",
        collapsible: true,
        items: [
          { text: "Opret VPN-forbindelse", link: "vpn/vpn_logon/vpn_logon" },
        ]
      },
      
      ],
      footer: {
        // message: "Released under the MIT License.",
        copyright: "Copyright © Phillip Friis Petersen",
      },
    },
  };

