import React, { useEffect, useState } from 'react'

const UseBreakPoint = () => {
    const [breakpoint, setBreakpoint] = useState('')

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window

            if (innerWidth >= 1536) {
                setBreakpoint('2xl')
            } else if (innerWidth >= 1280) {
                setBreakpoint('xl')
            } else if (innerWidth >= 1024) {
                setBreakpoint('lg')
            } else if (innerWidth >= 768) {
                setBreakpoint('md')
            } else {
                setBreakpoint('sm')
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return breakpoint
}

export default UseBreakPoint
