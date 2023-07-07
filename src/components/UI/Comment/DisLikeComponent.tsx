import React, { useState } from 'react'
import { BiDislike } from 'react-icons/bi'
import { DisLikeComponentProps } from '~/utils/interface'

const DisLikeComponent = ({
    isDisLike,
    count,
    handleDisLike,
    handleCancel,
}: DisLikeComponentProps) => {
    return (
        <div className='flex space-x-2 items-center'>
            {isDisLike ? (
                <BiDislike
                    onClick={() => {
                        handleCancel()
                    }}
                    className='cursor-pointer text-[#2196F3]'
                />
            ) : (
                <BiDislike
                    onClick={() => {
                        handleDisLike()
                    }}
                    className='cursor-pointer hover:text-[#2196F3]'
                />
            )}
            <span className='text-[#2196F3] text-[13px]'>
                {count > 0 ? count : null}
            </span>
        </div>
    )
}

export default DisLikeComponent
