import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { FaCalendar, FaPlayCircle } from 'react-icons/fa'
import { MdOutlineAccessTime } from 'react-icons/md'
import { convertMonthNumberToMonthString } from '../utils/function'
import { AiOutlinePlus } from 'react-icons/ai'
import { Characters, Recommend, RelateAnime } from '~/components'
import { getAnimeInfo } from '~/utils/API'
import { AnimeInfo } from '~/utils/interface'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

const Detail = ({ anime_info }: { anime_info: AnimeInfo }) => {
    return (
        <>
            <div className='w-full h-full flex flex-col overflow-hidden overflow-y-auto bg-[#202125]'>
                <div className='flex xl:flex-row flex-col xl:space-y-0 space-y-5'>
                    <div className='flex flex-col space-y-4 w-full'>
                        <div className='relative w-full flex  xl:flex-row flex-col items-center overflow-hidden'>
                            <div className='absolute w-full h-full'>
                                <img
                                    className='z-[-2] h-full w-full object-cover opacity-50 blur-xl'
                                    src={anime_info?.image}
                                />
                            </div>
                            <div className='z-[1] xl:w-[80%] w-full flex flex-col justify-center items-center xl:py-[50px] lg:py-[30px] py-[20px] sm:flex-row sm:items-start sm:space-x-6 sm:space-y-0 sm:px-[20px]  space-y-6'>
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
                                        <Link
                                            href={`/watch?id=${anime_info.id}&episode=${anime_info.episodes[0].id}`}
                                        >
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
                                        </Link>
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
                            <div className='z-[1] xl:block hidden xl:w-[20%] w-full h-full bg-[rgba(255,255,255,.1)] text-[#fff] sm:text-[14px] text-[13px] font-medium py-[50px] px-[25px]'>
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
                                        <span className='line-clamp-2'>
                                            {anime_info.title.romaji}
                                        </span>
                                    </div>
                                    <div className='flex items-center space-x-3'>
                                        <span>Synonyms:</span>
                                        <span className='line-clamp-2'>
                                            {anime_info.synonyms[0]}
                                        </span>
                                    </div>
                                    <div className='flex items-center space-x-3'>
                                        <span>Aired:</span>
                                        <span>
                                            {` ${convertMonthNumberToMonthString(
                                                anime_info?.startDate
                                                    .month as number,
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
                        <Characters characters={anime_info.characters} />
                    </div>
                    <div className='xl:hidden block w-full bg-[rgba(255,255,255,.1)] text-[#fff] sm:text-[14px] text-[13px] font-medium py-[50px] px-[25px]'>
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
                        data={anime_info?.recommendations}
                        props={{
                            className: 'xl:w-[80%] px-[20px]',
                        }}
                    />
                    <div className='xl:w-[20%] xl:mt-0 mt-[100px] xl:px-0 px-[20px]'>
                        <RelateAnime data={anime_info?.relations} />
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
