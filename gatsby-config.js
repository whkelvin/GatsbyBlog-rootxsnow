module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("sass"),
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
