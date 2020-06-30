/** @jsx jsx */
// @ts-ignore
import React from "react"
import { Link, jsx } from "theme-ui"

const repoUrl = 'https://github.com/Roberto14/robertojesus.me/edit/master/content'

type EditOnGitHubProps = {
    contentPath: string,
}

const EditOnGitHub = ({ contentPath }: EditOnGitHubProps) => (
    <Link target="_blank" href={`${repoUrl}/${contentPath}`}>Edit me on GitHub</Link>
)

export default EditOnGitHub
