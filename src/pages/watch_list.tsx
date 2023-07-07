import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { AiFillHeart, AiTwotoneHeart } from 'react-icons/ai'
import { BsFillBellFill, BsFillPlayFill } from 'react-icons/bs'
import { RxCounterClockwiseClock } from 'react-icons/rx'
import Loading from '~/components/Loading'
import { getUserWatchList } from '~/utils/API'
import { PopularAnime, WatchList } from '~/utils/interface'

const Watch_List = () => {
    const { data: sessionData } = useSession()
    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['watch_list'],
        queryFn: async () => {
            const data = await getUserWatchList(sessionData?.user.id as string)

            return data
        },
        onSuccess: (data) => {
            console.log(data)
        },
    })
    return (
        <div className='flex flex-col space-y-8'>
            <div className='relative w-full flex flex-col space-y-10 justify-between items-center overflow-hidden'>
                <div className='absolute w-full h-full'>
                    <img
                        className='z-[-2] h-full w-full object-cover opacity-50 blur-xl'
                        src={sessionData?.user?.image as string}
                    />
                </div>
                <span className='z-[1] text-[#fff] text-[25px] font-semibold'>
                    Hi, {sessionData?.user.name}
                </span>
                <div className='z-[1] flex space-x-6'>
                    <span className='text-[#dddddd] flex space-x-2 items-center text-[16px] border-b-solid border-b-[3px] border-b-[#2196f3] py-[8px] px-[16px] hover:text-[#2196f3] cursor-pointer'>
                        <RxCounterClockwiseClock />
                        <span> Continue Watching</span>
                    </span>
                    <span className='text-[#dddddd] flex space-x-2 items-center text-[16px] py-[8px] px-[16px] hover:text-[#2196f3] cursor-pointer'>
                        <AiTwotoneHeart />
                        <span>Watch List</span>
                    </span>
                    <span className='text-[#dddddd] flex space-x-2 items-center text-[16px] py-[8px] px-[16px] hover:text-[#2196f3] cursor-pointer'>
                        <BsFillBellFill />
                        <span>Notification</span>
                    </span>
                </div>
            </div>
            <div className='flex flex-col space-y-4 py-[20px] px-[15px]'>
                <span className='text-[#2196F3] text-[25px] font-semibold flex items-center space-x-2'>
                    <AiFillHeart />
                    <span>Watch List</span>
                </span>
                <div className='grid 2xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4'>
                    {isLoading ? (
                        <div className='w-full h-full flex items-center justify-center'>
                            <Loading />
                        </div>
                    ) : (
                        data?.watch_list?.map((watch_list: WatchList) => {
                            return (
                                <Link
                                    key={watch_list.id}
                                    href={`/detail?id=${watch_list.id}`}
                                >
                                    <div className='w-full h-full rounded-md cursor-pointer'>
                                        <div className='h-[80%] relative flex items-center justify-center group'>
                                            <div className='after:anime-poster-bg'></div>
                                            <img
                                                className='w-full h-full object-cover'
                                                src={watch_list.image}
                                            />
                                            <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                                <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                            </div>
                                        </div>
                                        <div className='h-[20%] flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                            <span className='text-[#fff] font-medium text-[14px] line-clamp-2'>
                                                {watch_list.name}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default Watch_List
