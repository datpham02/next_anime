import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import React, { memo } from 'react'
import { FaSort } from 'react-icons/fa'
import { IoChatboxOutline } from 'react-icons/io5'
import { GetComments } from '~/utils/API'
import { Comment, CommentProps } from '~/utils/interface'
import CommentItem from './CommentItem'
import InputComment from './InputComment'

const CommentComponent = ({ animeId, episodeId }: CommentProps) => {
    const { data: sessionData } = useSession()

    const { data } = useQuery({
        queryKey: ['comment'],
        queryFn: async () => {
            const result = await GetComments(animeId, episodeId)
            return result
        },
    })

    return (
        <div className='bg-[#202125] rounded-sm flex flex-col space-y-4'>
            <span className='text-[#2196F3] text-[20px] font-semibold'>
                Comments
            </span>
            <div className='flex flex-col space-y-6 bg-[#2A2C31] sm:px-[50px] px-[20px] py-[20px]'>
                <div className='h-full w-full flex flex-col space-y-4'>
                    <div className='flex items-center justify-between py-[15px]'>
                        <div className='flex items-center space-x-2 text-[#fff]'>
                            <IoChatboxOutline />
                            <span>Comments</span>
                        </div>
                        <div className='flex items-center space-x-2 text-[#fff] cursor-pointer'>
                            <span>Sort by</span>
                            <FaSort />
                        </div>
                    </div>
                    <div className='w-full flex justify-start space-x-3'>
                        <div className='flex justify-start pt-[5px]'>
                            <img
                                className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                src={sessionData?.user?.image as string}
                            />
                        </div>
                        <div className='w-full flex flex-1 flex-col space-y-3'>
                            <div className='flex items-center space-x-1 text-[13px]'>
                                <span className='text-[#fff]'>Comments as</span>
                                <span className='text-[#2196F3]'>
                                    {sessionData?.user.name}
                                </span>
                            </div>
                            <InputComment
                                animeId={animeId}
                                episodeId={episodeId}
                            />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col space-y-4'>
                    {data &&
                        data.map((comment: Comment) => {
                            return (
                                <CommentItem
                                    key={comment.content + comment.commentAt}
                                    commentData={comment}
                                />
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default memo(CommentComponent)
