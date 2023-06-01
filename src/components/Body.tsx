import React from 'react'
import { Children } from '../utils/interface'
const Body = ({ children }: Children) => {
    return (
        <>
            <div className='bg-[#0D1016] w-screen h-screen overflow-y-auto'>
                {children}
            </div>
        </>
    )
}

export default Body
