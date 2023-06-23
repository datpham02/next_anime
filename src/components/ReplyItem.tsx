import React, { useRef, useState } from 'react'
import { BiLike, BiDislike } from 'react-icons/bi'
import { BsFillReplyFill } from 'react-icons/bs'
import { calculateTimeElapsed } from '~/utils/function'
import { ReplyItemProps } from '~/utils/interface'
import InputReply from './InputReply'

const ReplyItem = ({ reply, commentId }: ReplyItemProps) => {
    const wrappedInputReplyRef = useRef<HTMLDivElement>(null)
    const handleReplyOnClick = () => {
        if (wrappedInputReplyRef && wrappedInputReplyRef.current) {
            wrappedInputReplyRef.current.classList.toggle('h-[0px]')
            wrappedInputReplyRef.current.classList.toggle('h-[110px]')
        }
    }

    return (
        <div className='w-full flex justify-start space-x-3'>
            <div className='flex justify-start'>
                <img
                    className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                    src={reply?.user.image}
                />
            </div>
            <div className='w-full flex flex-1 flex-col space-y-2'>
                <div className='flex items-center space-x-3'>
                    <span className='text-[#fff] text-[14px]'>
                        {reply?.user?.name}
                    </span>
                    <span className='text-[#515356] text-[12px]'>
                        {calculateTimeElapsed(reply.replyAt)}
                    </span>
                </div>
                <div className='flex space-x-2'>
                    <span className='text-[#2196F3] text-[14px]'>{`@${reply.user.name}`}</span>
                    <p className='text-[14px] text-[#7E888B]'>
                        {reply.content}
                    </p>
                </div>
                <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                    <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                        <BsFillReplyFill />
                        <span
                            onClick={() => {
                                handleReplyOnClick()
                            }}
                            className='text-[13px]'
                        >
                            Reply
                        </span>
                    </div>
                    <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                    <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                </div>
                <div
                    ref={wrappedInputReplyRef}
                    className='overflow-hidden transition-all duration-150 ease-linear h-[0px]'
                >
                    <InputReply
                        commentId={commentId}
                        inputReplyShow={handleReplyOnClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default ReplyItem