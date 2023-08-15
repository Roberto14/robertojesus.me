/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";

const Footer = () => {
  const { siteTitleAlt } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitleAlt}
      </div>
      <div>
          Built with <Link
          aria-label="Link to Gatsby homepage"
          href="https://www.gatsbyjs.org/"
      >
          Gatsby
      {' - '}
      </Link>
        Theme by <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
      >
          LekoArts
        </Link>
      </div>
    </footer>
  )
}

export default Footer
