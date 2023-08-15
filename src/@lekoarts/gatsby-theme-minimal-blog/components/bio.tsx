// @ts-ignore
import React from "react"
import { Flex, Box, Image } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
// @ts-ignore
import Bio from "../texts/bio"
// @ts-ignore
import profilePic from '../../../../static/profile-picture.png'

const Biography = () => {
    const { author } = useSiteMetadata()

    return (
        <Flex sx={{ flexDirection: [`column`, `column`, `row`]}}>
            <Box mx={['auto', 'auto', 0]} my={'auto'}>
                <Image src={profilePic} alt={`author ${author}`} sx={{ width: [180, 180, 120]}} />
            </Box>
            <Box pl={[null, null, 16]}>
                <Bio author={author} />
            </Box>
        </Flex>
)}

export default Biography
