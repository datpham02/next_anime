import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { queryClient } from '~/pages/_app'
import { CreateReply } from '~/utils/API'
import { InputReplyProps } from '~/utils/interface'

const InputReply = ({ commentId, inputReplyShow }: InputReplyProps) => {
    const { data: sessionData } = useSession()
    const [reply, setReply] = useState<string>('')
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: async (data: {
            content: string
            userId: string
            commentId: string
        }) => {
            const result = await CreateReply(
                data.content,
                data.userId,
                data.commentId,
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
            setReply('')
            inputReplyShow()
        },
    })

    const onChangeReplyInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setReply(e.target.value)
    }
    const handleReply = () => {
        mutateAsync({
            content: reply,
            userId: sessionData?.user.id as string,
            commentId: commentId,
        })
    }

    return (
        <div className='flex flex-col space-y-2'>
            <textarea
                rows={2}
                placeholder='Leave a reply'
                value={reply}
                onChange={(e) => {
                    onChangeReplyInput(e)
                }}
                className='w-full outline-none text-[#fff] text-[14px] bg-[#4C4F57] rounded-md resize-none px-[8px] py-[10px] placeholder:text-[13px]'
            />
            <div className='flex space-x-2 items-center justify-end'>
                <button
                    onClick={() => {
                        handleReply()
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
