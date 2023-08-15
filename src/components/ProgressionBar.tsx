/** @jsx jsx */
// @ts-ignore
import React from "react"
import { jsx } from "theme-ui"

type ProgressionBarType = {
    text: string,
    percentage: number
}

const ProgressionBar = ({ text, percentage }: ProgressionBarType) => {
    const progressStyles = {
        float: 'left',
        width: `${percentage}%`,
        height: '100%',
        fontSize: 1,
        fontWeight: 'bold',
        lineHeight: '26px',
        color: '#fff',
        paddingLeft: '10px',
        backgroundColor: 'secondary',
        boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.15)',
        transition: 'width .6s ease',
    }

    const wrapperStyles = {
        height: '26px',
        width: [ '100%', '100%', '60%'],
        marginBottom: '20px',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,.1)',
    }

    return (
        <div sx={wrapperStyles}>
            <div role="progressbar" sx={progressStyles}>
                {text}
            </div>
        </div>
    )
}

export default ProgressionBar
