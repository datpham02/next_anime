import React, { useRef, useState } from 'react'
import { BiLike, BiDislike } from 'react-icons/bi'
import { BsFillReplyFill } from 'react-icons/bs'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { calculateTimeElapsed } from '~/utils/function'
import { Comment, Reply } from '~/utils/interface'
import InputReply from './InputReply'
import ReplyItem from './ReplyItem'
import { useMutation } from '@tanstack/react-query'
import { LikeComment } from '~/utils/API'

const CommentItem = ({ commentData }: { commentData: Comment }) => {
    const wrappedInputReplyRef = useRef<HTMLDivElement>(null)
    const wrappedReplyRef = useRef<HTMLDivElement>(null)
    const [replyShow, setReplyShow] = useState<Boolean>(false)

    const { mutate: like } = useMutation({
        mutationFn: async (data: { commentId: string; userId: string }) => {
            const result = await LikeComment(data.commentId, data.userId)
            return result
        },
    })

    const handleReplyOnClick = () => {
        if (wrappedInputReplyRef && wrappedInputReplyRef.current) {
            wrappedInputReplyRef.current.classList.toggle('h-[0px]')
        }
    }
    const handleViewReplyOnClick = () => {
        setReplyShow(!replyShow)
        if (wrappedReplyRef && wrappedReplyRef.current) {
            wrappedReplyRef.current.classList.toggle('h-[0px]')
        }
    }
    return (
        <div className='w-full flex justify-start space-x-3'>
            <div className='flex justify-start'>
                <img
                    className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                    src={commentData?.user?.image}
                />
            </div>
            <div className='w-full flex flex-1 flex-col space-y-2'>
                <div className='flex items-center space-x-3'>
                    <span className='text-[#fff] text-[14px]'>
                        {commentData?.user?.name}
                    </span>
                    <span className='text-[#515356] text-[12px]'>
                        {calculateTimeElapsed(commentData.commentAt)}
                    </span>
                </div>
                <p className='text-[14px] text-[#7E888B]'>
                    {commentData?.content}
                </p>
                <div className='flex flex-col space-y-3'>
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
                            commentId={commentData.id}
                            inputReplyShow={handleReplyOnClick}
                        />
                    </div>
                    {commentData.reply.length > 0 ? (
                        <div className='flex flex-col space-y-2'>
                            <div className='text-[#2196F3] text-[14px] flex items-center space-x-1 cursor-pointer'>
                                {replyShow ? (
                                    <IoMdArrowDropup className='w-[18px] h-[18px]' />
                                ) : (
                                    <IoMdArrowDropdown className='w-[18px] h-[18px]' />
                                )}

                                <span
                                    onClick={() => {
                                        handleViewReplyOnClick()
                                    }}
                                >
                                    View {commentData.reply.length} replies
                                </span>
                            </div>

                            <div
                                ref={wrappedReplyRef}
                                className='flex flex-col space-y-4 h-[0px] overflow-hidden transition-all duration-200 ease-linear'
                            >
                                {commentData.reply.map((reply: Reply) => {
                                    return (
                                        <ReplyItem
                                            commentId={commentData.id}
                                            reply={reply}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default CommentItem
