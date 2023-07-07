import React from 'react'
import { ArrowProps } from '~/utils/interface'

const PreArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    )
}

export default PreArrow
