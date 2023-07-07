import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { RecommendProps, Recommendation } from '../../utils/interface'
import Link from 'next/link'

const Recommend = ({ data, props }: RecommendProps) => {
    return (
        <>
            <div {...props}>
                <div className='flex flex-col space-y-4 w-full'>
                    <span className='text-[#2196F3] text-[20px] font-semibold'>
                        Recommended for you
                    </span>
                    <div className='grid 2xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                        {data?.map((recommend_anime: Recommendation) => {
                            return (
                                <Link
                                    key={recommend_anime.id}
                                    href={`/detail?id=${recommend_anime.id}`}
                                >
                                    <div className='w-full h-full rounded-md cursor-pointer'>
                                        <div className='h-[80%] relative flex items-center justify-center group'>
                                            <div className='after:anime-poster-bg'></div>
                                            <img
                                                className='w-full h-full object-cover'
                                                src={recommend_anime.image}
                                            />
                                            <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                                <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                            </div>
                                        </div>
                                        <div className='h-[20%] flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                            <span className='text-[#fff] font-medium text-[14px] line-clamp-2'>
                                                {recommend_anime.title.romaji}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Recommend
