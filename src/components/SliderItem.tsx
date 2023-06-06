import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { FaCalendar, FaPlayCircle } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineAccessTime } from 'react-icons/md'
import { getAnimeInfo } from '~/utils/API'
import { convertMonthNumberToMonthString } from '~/utils/function'
import { AnimeInfo, TrendingAnime } from '~/utils/interface'
import Loading from './Loading'
import Link from 'next/link'

const SliderItem = ({
    TrendingAnime,
    key,
}: {
    TrendingAnime: TrendingAnime
    key: any
}) => {
    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['anime_info'],
        queryFn: async () => {
            const data: AnimeInfo = await getAnimeInfo(TrendingAnime.id, 'zoro')
            return data
        },
    })

    return (
        <>
            <div
                key={key}
                className='relative flex items-center justify-center outline-none 2xl:h-[650px]  xl:h-[550px] lg:h-[500px] md:h-[450px] h-[400px] w-full overflow-hidden  '
            >
                {isLoading ? (
                    <div className='w-full h-full flex items-center justify-center'>
                        <Loading />
                    </div>
                ) : (
                    <>
                        <div className='relative flex items-center w-full h-full text-[#fff] '>
                            <div className='z-[-1] absolute w-full h-full flex justify-center items-center'>
                                <img
                                    className='w-full h-full object-cover opacity-50'
                                    src={TrendingAnime.image}
                                />
                                <div className='before-slider'></div>
                                <div className='after-slider'></div>
                            </div>
                            <div className='z-[1] px-[35px] md:pt-[30px] pt-[180px]  md:w-[50%] w-[80%] flex flex-col space-y-4'>
                                <h1
                                    style={{
                                        color: TrendingAnime.color,
                                    }}
                                    className='line-clamp-2 font-bold 2xl:text-[60px] xl:text-[40px] lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px]'
                                >
                                    {TrendingAnime.title.romaji}
                                </h1>
                                <div className='md:flex hidden items-center space-x-4 '>
                                    <div className='flex items-center space-x-2'>
                                        <BsPlayCircle />
                                        <span>{TrendingAnime.type}</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <MdOutlineAccessTime />
                                        <span>{TrendingAnime.duration}</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <FaCalendar />
                                        <span>
                                            {` ${convertMonthNumberToMonthString(
                                                data?.startDate.month as number,
                                            )} ${data?.startDate.day}, ${
                                                data?.startDate.year
                                            }`}
                                        </span>
                                    </div>
                                </div>
                                <p
                                    className='xl:line-clamp-3 line-clamp-2 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:[11px] text-[10px]'
                                    dangerouslySetInnerHTML={{
                                        __html: TrendingAnime.description,
                                    }}
                                />

                                <div className='flex items-center space-x-4'>
                                    <button
                                        style={{
                                            backgroundColor:
                                                TrendingAnime.color,
                                        }}
                                        className='flex items-center space-x-2 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:[13px] text-[12px] 2xl:px-[20px] 2xl:py-[8px] xl:px-[18px] xl:py-[6px] lg:px-[18px] lg:py-[6px] md:px-[16px] md:py-[8px] sm:px-[14px] sm:py-[8px] px-[12px] py-[8px] rounded-full'
                                    >
                                        <FaPlayCircle />
                                        <span>Watch Now</span>
                                    </button>
                                    <Link
                                        href={`/detail?id=${TrendingAnime.id}`}
                                    >
                                        <button className='flex items-center space-x-2 bg-[#95afc0] 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:[13px] text-[12px] 2xl:px-[20px] 2xl:py-[8px] xl:px-[18px] xl:py-[6px] lg:px-[18px] lg:py-[6px] md:px-[16px] md:py-[8px] sm:px-[14px] sm:py-[8px] px-[12px] py-[8px] rounded-full'>
                                            <span>Detail</span>
                                            <IoIosArrowForward />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default SliderItem
