/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
// @ts-ignore
import React from "react"
import ReactDisqusComments from 'react-disqus-comments'
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import Biography from "./bio"

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      body: string
      excerpt: string
      timeToRead?: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
    />
    <Heading variant="styles.h2">{post.title}</Heading>
    <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
      {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
      {post.timeToRead && ` — `}
      {post.timeToRead && <span>{post.timeToRead} min read</span>}
    </p>
    <section sx={{ my: 5, ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) } }}>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Biography />
      <ReactDisqusComments
          shortname='robertos-corner'
          identifier={post.slug.slice(1)}
          title={post.title}
          url={`https://robertojesus.me${post.slug}`}
          onNewComment={() => console.log(`Thanks for commenting on ${post.title}`)}
      />
    </section>
  </Layout>
)

export default Post