/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import EditOnGitHub from "./editOnGitHub";
import Biography from "./bio";

type MBPostProps = {
    post: {
        slug: string
        title: string
        date: string
        tags?: {
            name: string
            slug: string
        }[]
        description?: string
        canonicalUrl?: string
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

const PostFooter = ({ post }: MBPostProps) =>
    <>
        <EditOnGitHub contentPath={`posts${post.slug}/index.mdx`} />
        <Biography />
    </>

export default PostFooter
