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
        <Flex my={5} sx={{ flexDirection: [`column`, `column`, `row`]}}>
            <Box mx={['auto', 'auto', 0]} my={'auto'}>
                <Image src={profilePic} alt={`author ${author}`} variant='avatar' />
            </Box>
            <Box pl={[null, null, 16]} pt={2} >
                <Bio author={author} />
            </Box>
        </Flex>
)}

export default Biography
