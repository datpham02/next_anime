import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { queryClient } from '~/pages/_app'
import { CreateComment, CreateReply } from '~/utils/API'
import { InputReplyProps } from '~/utils/interface'

const InputReply = ({
    userId,
    episodeId,
    animeId,
    parentCommentId,
}: InputReplyProps) => {
    const [comment, setComment] = useState<string>('')
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: async (data: {
            userId: string
            content: string
            animeId: string
            episodeId: string
            parentCommentId: string
        }) => {
            const result = await CreateReply(
                data.userId,
                data.content,
                data.episodeId,
                data.animeId,
                data.parentCommentId,
            )
            return result
        },
        onError: () => {
            toast.error('Something went wrong please f5 and try again')
        },
        onSettled: () => {
            queryClient.refetchQueries(['comment'])
        },
        onSuccess: () => {
            setComment('')
        },
    })

    const onChangeCommentInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }
    const handleComment = () => {
        mutateAsync({
            userId: userId,
            content: comment,
            episodeId: episodeId,
            animeId: animeId,
            parentCommentId: parentCommentId,
        })
    }

    return (
        <div className='relative flex flex-col space-y-2'>
            <textarea
                rows={2}
                placeholder='Leave a comment'
                value={comment}
                onChange={(e) => {
                    onChangeCommentInput(e)
                }}
                className='w-full outline-none text-[#fff] text-[14px] bg-[#4C4F57] rounded-md resize-none px-[8px] py-[10px] placeholder:text-[13px]'
            />
            <div className='flex space-x-2 items-center justify-end'>
                <button
                    onClick={() => {
                        handleComment()
                    }}
                    disabled={isLoading}
                    className='bg-[#2196F3] rounded-full px-[12px] py-[6px] text-[#fff]'
                >
                    {isLoading ? (
                        <AiOutlineLoading3Quarters className='animate-spin' />
                    ) : (
                        'Reply'
                    )}
                </button>
            </div>
        </div>
    )
}

export default InputReply
