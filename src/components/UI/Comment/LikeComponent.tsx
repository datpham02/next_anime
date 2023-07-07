import React, { useState } from 'react'
import { BiLike } from 'react-icons/bi'
import { LikeComponentProps } from '~/utils/interface'

const LikeComponent = ({
    isLike,
    count,
    handleLike,
    handleCancel,
}: LikeComponentProps) => {
    return (
        <div className='flex space-x-2 items-center'>
            {isLike ? (
                <BiLike
                    onClick={() => {
                        handleCancel()
                    }}
                    className='cursor-pointer text-[#2196F3]'
                />
            ) : (
                <BiLike
                    onClick={() => {
                        handleLike()
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

export default LikeComponent
