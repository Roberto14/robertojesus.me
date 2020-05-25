import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui"

export default {
    ...baseTheme,
    images: {
        avatar: {
            width: [200, 200, 72],
        },
    }
    // initialColorModeName: (new Date()).getHours() >= 6 && (new Date()).getHours() < 18 ? `light` : `dark`,
}
