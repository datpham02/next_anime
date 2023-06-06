import React, { useEffect, useRef, useState } from 'react'

import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { BsFillPlayFill, BsFillReplyFill, BsPlayCircle } from 'react-icons/bs'
import { FaCalendar, FaPlayCircle, FaSort } from 'react-icons/fa'
import { IoChatboxOutline } from 'react-icons/io5'
import { MdOutlineAccessTime } from 'react-icons/md'
import { convertMonthNumberToMonthString } from '../utils/function'

import EmojiPicker from 'emoji-picker-react'
import { BiLike, BiDislike } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { EpisodeComponent, Recommend } from '~/components'
import dynamic from 'next/dynamic'
import { GetServerSidePropsContext } from 'next/types'
import { getAnimeEpisodeStreamingLink, getAnimeInfo } from '~/utils/API'
import { AnimeInfo, Episode, EpisodeSource } from '~/utils/interface'
import { useRouter } from 'next/router'

const VideoPlayer = dynamic(() => import('../components/VideoPlayer'), {
    ssr: false,
})

const Watch = ({
    anime_info,
    currentEpisode,
}: {
    anime_info: AnimeInfo
    currentEpisode: EpisodeSource
}) => {
    const router = useRouter()
    return (
        <>
            <div>
                <div className='flex xl:flex-row flex-col'>
                    <div className='w-full xl:w-[75%] 2xl:h-[640px] xl:h-[540px] lg:w-[600px] lg:h-[500px] '>
                        <VideoPlayer />
                    </div>
                    <div className='xl:w-[25%]  w-full flex flex-col bg-[#14151A] lg:pb-0 pb-[25px]'>
                        <div className='flex items-center justify-between px-[10px] py-[12px]'>
                            <span className='text-[#fff] text-[14px]'>
                                List of episodes:
                            </span>
                            <div className='relative flex items-center'>
                                <input
                                    placeholder='Number of Ep'
                                    className='outline-none rounded-md w-[140px] bg-[#14151A] border-solid border-[1px] border-[#35373D] placeholder:text-[12px] pl-[33px] py-[4px] focus:text-[#fff]'
                                />
                                <AiOutlineSearch className='absolute left-[10px] text-[#fff]' />
                            </div>
                        </div>
                        <div className='flex flex-wrap p-[8px] gap-1'>
                            {anime_info.episodes.length > 12
                                ? anime_info.episodes.map(
                                      (epsiode: Episode, index: number) => (
                                          <EpisodeComponent
                                              type={2}
                                              episode_name={epsiode.title}
                                              episode={index + 1}
                                              watching={false}
                                              key={epsiode.id}
                                          />
                                      ),
                                  )
                                : anime_info.episodes.map(
                                      (epsiode: Episode, index: number) => (
                                          <EpisodeComponent
                                              type={1}
                                              episode_name={epsiode.title}
                                              episode={index + 1}
                                              watching={false}
                                              key={epsiode.id}
                                          />
                                      ),
                                  )}
                        </div>
                    </div>
                </div>
                <div className='w-full flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4 bg-[#202125] px-[20px] pt-[50px] rounded-sm'>
                    <div className='h-full lg:w-[80%] w-full flex flex-col space-y-4'>
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
                                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                            />
                                        </div>
                                        <div className='w-full flex flex-1 flex-col space-y-3'>
                                            <div className='flex items-center space-x-1 text-[13px]'>
                                                <span className='text-[#fff]'>
                                                    Comments as
                                                </span>
                                                <span className='text-[#2196F3]'>
                                                    Phạm Trọng Đạt
                                                </span>
                                            </div>
                                            <div>
                                                <textarea
                                                    rows={2}
                                                    placeholder='Leave a comment'
                                                    className='w-full outline-none bg-[#4C4F57] rounded-md resize-none px-[8px] py-[10px] placeholder:text-[13px]'
                                                />
                                                {/* <EmojiPicker /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <div className='w-full flex justify-start space-x-3'>
                                        <div className='flex justify-start'>
                                            <img
                                                className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                            />
                                        </div>
                                        <div className='w-full flex flex-1 flex-col space-y-2'>
                                            <div className='flex items-center space-x-3'>
                                                <span className='text-[#fff] text-[14px]'>
                                                    Phạm Trọng Đạt
                                                </span>
                                                <span className='text-[#515356] text-[12px]'>
                                                    4 hours ago
                                                </span>
                                            </div>
                                            <p className='text-[14px] text-[#7E888B]'>
                                                Bro is hella weird
                                            </p>
                                            <div className='flex flex-col space-y-3'>
                                                <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                                                    <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                                                        <BsFillReplyFill />
                                                        <span className='text-[13px]'>
                                                            Reply
                                                        </span>
                                                    </div>
                                                    <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                                                    <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                                                </div>
                                                <div className='flex flex-col space-y-2'>
                                                    <div className='text-[#2196F3] text-[14px] flex items-center space-x-1 cursor-pointer'>
                                                        <IoMdArrowDropdown className='w-[18px] h-[18px]' />
                                                        <span>
                                                            View 2 replies
                                                        </span>
                                                    </div>

                                                    <div className='flex flex-col space-y-4'>
                                                        <div className='w-full flex justify-start space-x-3'>
                                                            <div className='flex justify-start'>
                                                                <img
                                                                    className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                                                    src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                                                />
                                                            </div>
                                                            <div className='w-full flex flex-1 flex-col space-y-2'>
                                                                <div className='flex items-center space-x-3'>
                                                                    <span className='text-[#fff] text-[14px]'>
                                                                        Phạm
                                                                        Trọng
                                                                        Đạt
                                                                    </span>
                                                                    <span className='text-[#515356] text-[12px]'>
                                                                        4 hours
                                                                        ago
                                                                    </span>
                                                                </div>
                                                                <p className='text-[14px] text-[#7E888B]'>
                                                                    Bro is hella
                                                                    weird
                                                                </p>
                                                                <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                                                                    <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                                                                        <BsFillReplyFill />
                                                                        <span className='text-[13px]'>
                                                                            Reply
                                                                        </span>
                                                                    </div>
                                                                    <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                                                                    <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-full flex justify-start space-x-3'>
                                                            <div className='flex justify-start'>
                                                                <img
                                                                    className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                                                    src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                                                />
                                                            </div>
                                                            <div className='w-full flex flex-1 flex-col space-y-2'>
                                                                <div className='flex items-center space-x-3'>
                                                                    <span className='text-[#fff] text-[14px]'>
                                                                        Phạm
                                                                        Trọng
                                                                        Đạt
                                                                    </span>
                                                                    <span className='text-[#515356] text-[12px]'>
                                                                        4 hours
                                                                        ago
                                                                    </span>
                                                                </div>
                                                                <p className='text-[14px] text-[#7E888B]'>
                                                                    Bro is hella
                                                                    weird
                                                                </p>
                                                                <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                                                                    <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                                                                        <BsFillReplyFill />
                                                                        <span className='text-[13px]'>
                                                                            Reply
                                                                        </span>
                                                                    </div>
                                                                    <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                                                                    <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-start space-x-3'>
                                        <div className='flex justify-start'>
                                            <img
                                                className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                            />
                                        </div>
                                        <div className='w-full flex flex-1 flex-col space-y-2'>
                                            <div className='flex items-center space-x-3'>
                                                <span className='text-[#fff] text-[14px]'>
                                                    Phạm Trọng Đạt
                                                </span>
                                                <span className='text-[#515356] text-[12px]'>
                                                    4 hours ago
                                                </span>
                                            </div>
                                            <p className='text-[14px] text-[#7E888B]'>
                                                Bro is hella weird
                                            </p>
                                            <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                                                <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                                                    <BsFillReplyFill />
                                                    <span className='text-[13px]'>
                                                        Reply
                                                    </span>
                                                </div>
                                                <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                                                <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-start space-x-3'>
                                        <div className='flex justify-start'>
                                            <img
                                                className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                            />
                                        </div>
                                        <div className='w-full flex flex-1 flex-col space-y-2'>
                                            <div className='flex items-center space-x-3'>
                                                <span className='text-[#fff] text-[14px]'>
                                                    Phạm Trọng Đạt
                                                </span>
                                                <span className='text-[#515356] text-[12px]'>
                                                    4 hours ago
                                                </span>
                                            </div>
                                            <p className='text-[14px] text-[#7E888B]'>
                                                Bro is hella weird
                                            </p>
                                            <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                                                <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                                                    <BsFillReplyFill />
                                                    <span className='text-[13px]'>
                                                        Reply
                                                    </span>
                                                </div>
                                                <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                                                <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Recommend data={[]} props={{}} />
                    </div>
                    <div className='lg:w-[20%]'></div>
                </div>
            </div>
        </>
    )
}

export default Watch

export const getServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    const { id } = context.query

    if (!id) {
        return { notFound: true }
    }

    const anime_info: AnimeInfo = await getAnimeInfo(id as string, 'zoro')

    const currentEpisode = await getAnimeEpisodeStreamingLink(
        anime_info.episodes[0].id,
    )
    return {
        props: {
            anime_info,
            currentEpisode,
        },
    }
}
