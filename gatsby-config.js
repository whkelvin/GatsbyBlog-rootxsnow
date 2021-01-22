module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("sass"),
            },
        },
        {
            resolve: `gatsby-plugin-goatcounter`,
            options: {
                // Either `code` or `selfHostUrl` is required.
                // REQUIRED IF USING HOSTED GOATCOUNTER! https://[my_code].goatcounter.com
                code: "rootxsnow",

                // REQUIRED IF USING SELFHOSTED GOATCOUNTER!
                selfHostUrl: `https://rootxsnow.goatcounter.com/count`,

                // ALL following settings are OPTIONAL

                // Avoids sending pageview hits from custom paths
                exclude: [],

                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,

                // Defines where to place the tracking script
                // boolean `true` in the head and `false` in the body
                head: false,

                // Set to true to include a gif to count non-JS users
                pixel: false,

                // Allow requests from local addresses (localhost, 192.168.0.0, etc.)
                // for testing the integration locally.
                // TIP: set up a `Additional Site` in your GoatCounter settings
                // and use its code conditionally when you `allowLocal`, example below
                allowLocal: false,

                // Override the default localStorage key more below
                localStorageKey: "skipgc",

                // Set to boolean true to enable referrer set via URL parameters
                // Like example.com?ref=referrer.com or example.com?utm_source=referrer.com
                // Accepts a function to override the default referrer extraction
                // NOTE: No Babel! The function will be passes as is to your websites <head> section
                // So make sure the function works as intended in all browsers you want to support
                referrer: false,

                // Setting it to boolean true will clean the URL from
                // `?ref` & `?utm_` parameters before sending it to GoatCounter
                // It uses `window.history.replaceState` to clean the URL in the
                // browser address bar as well.
                // This is to prevent ref tracking ending up in your users bookmarks.
                // All parameters other than `ref` and all `utm_` will stay intact
                urlCleanup: false,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/static/`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-copy-linked-files`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 600,
                            backgroundColor: `transparent`,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(
                    `${__dirname}/src/components/layout.jsx`
                ),
            },
        },
    ],
    siteMetadata: {
        menuLinks: [
            {
                name: "MyUbuntuSetup",
                nameTC: "我的Ubuntu設置",
                link: "/myUbuntuSetup",
            },
            {
                name: "Gnome",
                nameTC: "Gnome 桌面環境",
                link: "/gnomeDesktopEnvironment",
            },
            {
                name: "Terminal Emulator",
                nameTC: "終端機介紹",
                link: "/terminalEmulator",
            },
        ],
    },
};
