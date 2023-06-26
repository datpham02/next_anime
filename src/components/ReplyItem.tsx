import React, { useEffect, useRef, useState } from 'react'
import { BiLike, BiDislike } from 'react-icons/bi'
import { BsFillReplyFill } from 'react-icons/bs'
import { calculateTimeElapsed, isDisLike, isLike } from '~/utils/function'
import { ReplyItemProps } from '~/utils/interface'
import InputReply from './InputReply'
import { CancelLikeDisLikeReply, DisLikeReply, LikeReply } from '~/utils/API'
import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { queryClient } from '~/pages/_app'
import DisLikeComponent from './DisLikeComponent'
import LikeComponent from './LikeComponent'

const ReplyItem = ({ reply, commentId }: ReplyItemProps) => {
    const { data: sessionData } = useSession()
    const wrappedInputReplyRef = useRef<HTMLDivElement>(null)
    const [isLikeState, setIsLikeState] = useState<{
        state: Boolean
        count: number
    }>({ state: false, count: 0 })
    const [isDisLikeState, setIsDisLikeState] = useState<{
        state: Boolean
        count: number
    }>({ state: false, count: 0 })

    useEffect(() => {
        if (reply.like.length > 0) {
            if (isLike(sessionData?.user.id as string, reply.like)) {
                setIsLikeState({
                    ...isLikeState,
                    state: true,
                    count: reply.like.length,
                })
            }
        }
    }, [reply])
    useEffect(() => {
        if (reply.disLike.length > 0) {
            if (isDisLike(sessionData?.user.id as string, reply.disLike)) {
                setIsDisLikeState({
                    ...isDisLikeState,
                    state: true,
                    count: reply.disLike.length,
                })
            }
        }
    }, [reply])
    const { mutate: like } = useMutation({
        mutationFn: async (data: { replyId: string; userId: string }) => {
            const result = await LikeReply(data.replyId, data.userId)
            return result
        },
        onError: () => {
            toast.error('Something went wrong please f5 and try again')
        },
        onSettled: () => {
            queryClient.refetchQueries(['comment'])
        },
    })

    const { mutate: dislike } = useMutation({
        mutationFn: async (data: { replyId: string; userId: string }) => {
            const result = await DisLikeReply(data.replyId, data.userId)
            return result
        },
        onError: () => {
            toast.error('Something went wrong please f5 and try again')
        },
        onSettled: () => {
            queryClient.refetchQueries(['comment'])
        },
    })
    const { mutate: cancel } = useMutation({
        mutationFn: async (data: { replyId: string; userId: string }) => {
            const result = await CancelLikeDisLikeReply(
                data.replyId,
                data.userId,
            )
            return result
        },
        onError: () => {
            toast.error('Something went wrong please f5 and try again')
        },
        onSettled: () => {
            queryClient.refetchQueries(['comment'])
        },
    })
    const handleLike = () => {
        setIsLikeState({
            ...isLikeState,
            state: true,
            count: isLikeState.count + 1,
        })
        setIsDisLikeState({
            ...isDisLikeState,
            state: false,
            count:
                isDisLikeState.count > 0
                    ? isDisLikeState.count - 1
                    : isDisLikeState.count,
        })
        like({
            replyId: commentId as string,
            userId: sessionData?.user.id as string,
        })
    }
    const handleDisLike = () => {
        setIsDisLikeState({
            ...isDisLikeState,
            state: true,
            count: isDisLikeState.count + 1,
        })
        setIsLikeState({
            ...isLikeState,
            state: false,
            count:
                isLikeState.count > 0
                    ? isLikeState.count - 1
                    : isLikeState.count,
        })
        dislike({
            replyId: commentId as string,
            userId: sessionData?.user.id as string,
        })
    }
    const handleCancelLike = () => {
        setIsLikeState({
            ...isLikeState,
            state: false,
            count:
                isLikeState.count > 0
                    ? isLikeState.count - 1
                    : isLikeState.count,
        })
        cancel({
            replyId: commentId as string,
            userId: sessionData?.user.id as string,
        })
    }
    const handleCancelDisLike = () => {
        setIsDisLikeState({
            ...isDisLikeState,
            state: false,
            count:
                isDisLikeState.count > 0
                    ? isDisLikeState.count - 1
                    : isDisLikeState.count,
        })
        cancel({
            replyId: commentId as string,
            userId: sessionData?.user.id as string,
        })
    }
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
                    <LikeComponent
                        isLike={isLikeState.state}
                        handleLike={handleLike}
                        handleCancel={handleCancelLike}
                        count={isLikeState.count}
                    />
                    <DisLikeComponent
                        isDisLike={isDisLikeState.state}
                        handleDisLike={handleDisLike}
                        handleCancel={handleCancelDisLike}
                        count={isDisLikeState.count}
                    />
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
