import React, { useEffect, useRef, useState } from 'react'
import { BsFillReplyFill } from 'react-icons/bs'
import {
    calculateTimeElapsed,
    contentCommentFormat,
    getCommentReply,
    isDisLike,
    isLike,
    mergeData,
} from '~/utils/function'
import { Comment, Reply } from '~/utils/interface'
import { useMutation } from '@tanstack/react-query'
import {
    CancelLikeDisLikeComment,
    DisLikeComment,
    LikeComment,
} from '~/utils/API'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { queryClient } from '~/pages/_app'
import LikeComponent from './LikeComponent'
import DisLikeComponent from './DisLikeComponent'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import InputReply from './InputReply'
import CommentChild from './CommentChild'

const CommentParent = ({
    animeId,
    episodeId,
    commentData,
    Data,
}: {
    commentData: Comment
    animeId: string
    episodeId: string
    Data: Comment[]
}) => {
    const { data: sessionData } = useSession()
    const wrappedInputReplyRef = useRef<HTMLDivElement>(null)
    const wrappedReplyRef = useRef<HTMLDivElement>(null)
    const [reply, setReply] = useState<Reply[]>([])
    const [replyShow, setReplyShow] = useState<Boolean>(false)
    const [isLikeState, setIsLikeState] = useState<{
        state: Boolean
        count: number
    }>({ state: false, count: 0 })
    const [isDisLikeState, setIsDisLikeState] = useState<{
        state: Boolean
        count: number
    }>({ state: false, count: 0 })

    useEffect(() => {
        if (commentData.like.length > 0) {
            if (isLike(sessionData?.user.id as string, commentData.like)) {
                setIsLikeState({
                    ...isLikeState,
                    state: true,
                    count: commentData.like.length,
                })
            }
        }
    }, [commentData])
    useEffect(() => {
        if (commentData.disLike.length > 0) {
            if (
                isDisLike(sessionData?.user.id as string, commentData.disLike)
            ) {
                setIsDisLikeState({
                    ...isDisLikeState,
                    state: true,
                    count: commentData.disLike.length,
                })
            }
        }
    }, [commentData])

    const { mutate: like } = useMutation({
        mutationFn: async (data: { commentId: string; userId: string }) => {
            const result = await LikeComment(data.commentId, data.userId)
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
        mutationFn: async (data: { commentId: string; userId: string }) => {
            const result = await DisLikeComment(data.commentId, data.userId)
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
        mutationFn: async (data: { commentId: string; userId: string }) => {
            const result = await CancelLikeDisLikeComment(
                data.commentId,
                data.userId,
            )
            return result
        },
        onError: () => {
            toast.error('Something went wrong please f5 and try again')
        },
        onSuccess: () => {
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
            commentId: commentData.id as string,
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
            commentId: commentData.id as string,
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
            commentId: commentData.id as string,
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
            commentId: commentData.id as string,
            userId: sessionData?.user.id as string,
        })
    }
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
                        {calculateTimeElapsed(commentData?.commentAt)}
                    </span>
                </div>
                <p
                    className='text-[14px] text-[#7E888B]'
                    dangerouslySetInnerHTML={{
                        __html: contentCommentFormat(
                            commentData.parentComment.user,
                            commentData,
                        ),
                    }}
                />
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
                            userId={sessionData?.user?.id as string}
                            animeId={animeId}
                            episodeId={episodeId}
                            parentCommentId={commentData?.id}
                        />
                    </div>
                    {commentData.replies.length > 0 ? (
                        <div className='flex flex-col space-y-2'>
                            <div className='text-[#2196F3] text-[14px] flex items-center space-x-1 cursor-pointer'>
                                {replyShow ? (
                                    <>
                                        <IoMdArrowDropup className='w-[18px] h-[18px]' />
                                        <span
                                            onClick={() => {
                                                handleViewReplyOnClick()
                                            }}
                                        >
                                            Hide {commentData.replies.length}{' '}
                                            replies
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <IoMdArrowDropdown className='w-[18px] h-[18px]' />
                                        <span
                                            onClick={() => {
                                                handleViewReplyOnClick()
                                            }}
                                        >
                                            View {commentData.replies.length}{' '}
                                            replies
                                        </span>
                                    </>
                                )}
                            </div>

                            <div
                                ref={wrappedReplyRef}
                                className='flex flex-col space-y-4 h-[0px] overflow-hidden transition-all duration-200 ease-linear'
                            >
                                {mergeData(commentData.replies, Data).map(
                                    (reply: Reply) => {
                                        return (
                                            <CommentChild
                                                key={reply.id}
                                                animeId={animeId}
                                                episodeId={episodeId}
                                                commentData={getCommentReply(
                                                    reply.id,
                                                    Data,
                                                )}
                                            />
                                        )
                                    },
                                )}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default CommentParent
