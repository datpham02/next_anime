import React, { useEffect, useRef, useState } from 'react'
import { BsDot, BsFillPlayFill, BsPlayCircle } from 'react-icons/bs'
import { FaCalendar, FaPlayCircle } from 'react-icons/fa'
import { MdOutlineAccessTime } from 'react-icons/md'
import { convertMonthNumberToMonthString } from '../utils/function'
import { AiOutlinePlus } from 'react-icons/ai'
import { Recommend, RelateAnime } from '~/components'
import { useQuery } from '@tanstack/react-query'
import { getAnimeInfo } from '~/utils/API'
import { AnimeInfo } from '~/utils/interface'
import { GetServerSidePropsContext } from 'next'

const Detail = ({ anime_info }: { anime_info: AnimeInfo }) => {
    const childOfWrappedDivRef = useRef<HTMLDivElement>(null)

    const [heightChildDiv, setHeightChildDiv] = useState<number>(0)

    useEffect(() => {
        if (childOfWrappedDivRef && childOfWrappedDivRef.current) {
            console.log(childOfWrappedDivRef.current.clientHeight)
            setHeightChildDiv(childOfWrappedDivRef.current.clientHeight)
        }
    }, [childOfWrappedDivRef.current?.clientHeight])

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (childOfWrappedDivRef && childOfWrappedDivRef.current) {
                setHeightChildDiv(childOfWrappedDivRef.current.clientHeight)
            }
        })
    }, [])
    return (
        <>
            <div className='w-full h-full flex flex-col overflow-hidden overflow-y-auto'>
                <div
                    style={{
                        height: heightChildDiv,
                    }}
                    className='flex xl:flex-row flex-col'
                >
                    <div className='relative xl:w-[80%] w-full h-auto'>
                        <img
                            style={{
                                height: heightChildDiv,
                            }}
                            className='w-full  object-cover blur-xl'
                            src={anime_info.image}
                        />
                        <div
                            ref={childOfWrappedDivRef}
                            className='absolute flex xl:flex-row flex-col  xl:space-y-0 space-y-4 top-0 left-0 w-full h-auto bg-[rgba(0,0,0,0.4)] pb-[20px]'
                        >
                            <div className='flex sm:flex-row sm:items-start sm:space-x-6 sm:space-y-0 sm:px-[20px] flex-col space-y-6 justify-center items-center  mt-[100px]'>
                                <img
                                    className='w-[180px] h-[260px] object-cover bg-center'
                                    src={anime_info.image}
                                />
                                <div className='flex flex-col space-y-6'>
                                    <h1 className='sm:text-left text-center text-[#fff] font-medium 2xl:text-[50px] xl:text-[40px] lg:text-[30px] md:text-[30px] sm:text-[25px] text-[22px]'>
                                        {anime_info.title.romaji}
                                    </h1>
                                    <div className='flex sm:justify-start items-center justify-center space-x-4 text-[#fff]'>
                                        <div className='flex items-center space-x-2'>
                                            <BsPlayCircle />
                                            <span>{anime_info.type}</span>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <MdOutlineAccessTime />
                                            <span>{anime_info.duration}</span>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <FaCalendar />
                                            <span>
                                                {` ${convertMonthNumberToMonthString(
                                                    anime_info?.startDate
                                                        .month as number,
                                                )} ${
                                                    anime_info?.startDate.day
                                                }, ${
                                                    anime_info?.startDate.year
                                                }`}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex sm:justify-start justify-center items-center space-x-4'>
                                        <button
                                            style={{
                                                backgroundColor:
                                                    anime_info.color,
                                            }}
                                            className='flex items-center space-x-2 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:[13px] text-[12px] 2xl:px-[20px] 2xl:py-[8px] xl:px-[18px] xl:py-[6px] lg:px-[18px] lg:py-[6px] md:px-[16px] md:py-[8px] sm:px-[14px] sm:py-[8px] px-[12px] py-[8px] rounded-full'
                                        >
                                            <FaPlayCircle />
                                            <span>Watch Now</span>
                                        </button>
                                        <button className='flex items-center space-x-2 bg-[#fff] 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:[13px] text-[12px] 2xl:px-[20px] 2xl:py-[8px] xl:px-[18px] xl:py-[6px] lg:px-[18px] lg:py-[6px] md:px-[16px] md:py-[8px] sm:px-[14px] sm:py-[8px] px-[12px] py-[8px] rounded-full'>
                                            <AiOutlinePlus />
                                            <span>Add to List</span>
                                        </button>
                                    </div>
                                    <p
                                        className='text-[#fff] sm:text-justify 2xl:text-[15px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] sm:block hidden'
                                        dangerouslySetInnerHTML={{
                                            __html: anime_info.description,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-[20%] w-full bg-[rgba(255,255,255,.1)] text-[#fff] sm:text-[14px] text-[13px] font-medium xl:py-[100px] py-[40px] px-[25px]'>
                        <div className='sm:hidden block'>
                            <span>Overview:</span>
                            <p
                                className='h-[100px] text-[#fff] text-[13px] opacity-50 overflow-y-auto'
                                dangerouslySetInnerHTML={{
                                    __html: anime_info.description,
                                }}
                            />
                        </div>
                        <div className='flex flex-col border-b-solid border-b-[1px] border-b-[#594B51] py-[10px] space-y-2'>
                            <div className='flex items-center space-x-3'>
                                <span>Japanese:</span>
                                <span>{anime_info.title.romaji}</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <span>Synonyms:</span>
                                <span>{anime_info.synonyms[0]}</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <span>Aired:</span>
                                <span>
                                    {` ${convertMonthNumberToMonthString(
                                        anime_info?.startDate.month as number,
                                    )} ${anime_info?.startDate.day}, ${
                                        anime_info?.startDate.year
                                    }`}
                                </span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <span>Duration:</span>
                                <span>{anime_info.duration}</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <span>Status:</span>
                                <span>{anime_info.status}</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <span>Rating:</span>
                                <span>{anime_info.rating}</span>
                            </div>
                        </div>
                        <div className='border-b-solid border-b-[1px] border-b-[#594B51] py-[10px] flex flex-wrap gap-2'>
                            <span>Genres:</span>
                            {anime_info.genres.map((genres: string) => (
                                <span
                                    key={genres}
                                    className='text-[12px] px-[8px] py-[4px] border-solid border-[1px] border-[#999296] rounded-full'
                                >
                                    {genres}
                                </span>
                            ))}
                        </div>
                        <div className='space-y-2 py-[10px]'>
                            <div className='flex items-center space-x-3'>
                                <span>Current Episodes:</span>
                                <span>{anime_info.currentEpisode}</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <span>Studios:</span>
                                <span>{anime_info.studios}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#202125] flex xl:flex-row flex-col w-full  pt-[30px]'>
                    <Recommend
                        data={anime_info.recommendations}
                        props={{
                            className: 'xl:w-[80%] px-[20px]',
                        }}
                    />
                    <div className='xl:w-[20%] xl:mt-0 mt-[100px] xl:px-0 px-[20px]'>
                        <RelateAnime data={anime_info.relations} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail

export const getServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    const { id } = context.query

    if (!id) {
        return { notFound: true }
    }

    const anime_info = await getAnimeInfo(id as string, 'zoro')

    return {
        props: {
            anime_info,
        },
    }
}
