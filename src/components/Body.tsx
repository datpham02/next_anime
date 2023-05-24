import React from 'react'
import { Routes } from 'react-router-dom'
import { Children } from '../utils/interface'
const Body = ({ children }: Children) => {
    return (
        <>
            <div className='bg-[#0D1016] w-screen h-screen lg:pt-[80px] md:pt-[75px] sm:pt-[70px] pt-[65px] overflow-y-auto'>
                <Routes>{children}</Routes>
            </div>
        </>
    )
}

export default Body
