/** @jsx jsx */
// @ts-ignore
import React from "react"
import { Link, Box, jsx } from "theme-ui"

const repoUrl = 'https://github.com/Roberto14/robertojesus.me/edit/master/content'

type EditOnGitHubProps = {
    contentPath: string,
}

const EditOnGitHub = ({ contentPath }: EditOnGitHubProps) => (
    <Box mb={4}>
        <Link target="_blank" href={`${repoUrl}/${contentPath}`}>Edit this article on GitHub</Link>
    </Box>
)

export default EditOnGitHub
