/** @jsx jsx */
// @ts-ignore
import React from "react"
import { Link, jsx } from "theme-ui"

type SequenceNavigationType = {
    sequence: [ string ],
    slug: string,
}

const SequenceNavigation = ({ sequence, slug }: SequenceNavigationType) => {
    const current = sequence.indexOf(slug)
    const prev = current - 1
    const next = current + 1
    const hasPrev = current > 0
    const hasNext = current < sequence.length - 1

    return (
        <div sx={{mt: 10, fontSize: 3, textAlign: 'center'}}>
            <span>Go to: </span>
            { hasPrev && <Link href={sequence[prev]}>Previous Code Smell</Link> }
            { hasPrev && hasNext && <span> | </span> }
            { hasNext && <Link href={sequence[next]}>Next Code Smell</Link> }
        </div>
    )
}

export default SequenceNavigation
