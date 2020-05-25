/** @jsx jsx */
import { jsx, Link } from "theme-ui"

const Footer = () => {
  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()}, Built with <Link
            aria-label="Link to Gatsby homepage"
            href="https://www.gatsbyjs.org/"
          >
            Gatsby
          </Link>
      </div>
      <div>
        Theme by <Link
          aria-label="Link to the theme author's website"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
        >
          LekoArts
        </Link>
      </div>
    </footer>
  )
}

export default Footer
