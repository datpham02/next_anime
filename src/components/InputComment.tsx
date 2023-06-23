import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { queryClient } from '~/pages/_app'
import { CreateComment } from '~/utils/API'
import { InputCommentProps } from '~/utils/interface'

const InputComment = ({ episodeId, animeId }: InputCommentProps) => {
    const { data: sessionData } = useSession()
    const [comment, setComment] = useState<string>('')
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: async (data: {
            content: string
            userId: string
            episodeId: string
            animeId: string
        }) => {
            const result = await CreateComment(
                data.content,
                data.userId,
                data.episodeId,
                data.animeId,
            )
            return result
        },
        onError: () => {
            toast.error('Something went wrong please f5 and try again')
        },
        onSuccess: () => {
            setComment('')
            queryClient.refetchQueries(['comment'])
        },
    })

    const onChangeCommentInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }
    const handleComment = () => {
        mutateAsync({
            content: comment,
            userId: sessionData?.user.id as string,
            episodeId: episodeId,
            animeId: animeId,
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
                        'Comment'
                    )}
                </button>
            </div>
        </div>
    )
}

export default InputComment
