import React, { useEffect, useRef, useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { BsFillPlayFill, BsFillReplyFill, BsPlayCircle } from 'react-icons/bs'
import { FaCalendar, FaPlayCircle, FaSort } from 'react-icons/fa'
import { IoChatboxOutline } from 'react-icons/io5'
import { MdOutlineAccessTime } from 'react-icons/md'
import { convertMonthNumberToMonthString } from '../utils/function'
import Episode from './Episode'
import EmojiPicker from 'emoji-picker-react'
import { BiLike, BiDislike } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'

const Watch = () => {
    const wrappedDivRef = useRef<HTMLDivElement>(null)
    const childOfWrappedDivRef = useRef<HTMLDivElement>(null)

    const [heightChildDiv, setHeightChildDiv] = useState<number>(0)

    useEffect(() => {
        if (childOfWrappedDivRef && childOfWrappedDivRef.current) {
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
            <div className='mt-[50px] overflow-hidden'>
                <div
                    style={{
                        height: heightChildDiv,
                    }}
                    className='relative w-full'
                >
                    <img
                        className='w-full h-full object-cover bg-center blur-xl'
                        src='https://img.zorores.com/_r/300x400/100/0a/d5/0ad5356f28ee75bccfde8b69ea6a5e54/0ad5356f28ee75bccfde8b69ea6a5e54.jpg'
                    />
                    <div
                        ref={childOfWrappedDivRef}
                        className='absolute top-0 left-0 w-full h-auto flex 2xl:flex-row lg:flex-col flex-col lg:space-y-4 space-y-4'
                    >
                        <div className='flex lg:flex-row flex-col-reverse 2xl:w-[80%] lg:w-full h-full 2xl:px-[20px] lg:px-[50px]'>
                            <div className='lg:w-[25%]  w-full flex flex-col bg-[#14151A] lg:pb-0 pb-[25px]'>
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
                                    <Episode
                                        type={1}
                                        episode={1}
                                        episode_name='All because of you'
                                        watching={true}
                                    />
                                    <Episode
                                        type={1}
                                        episode={2}
                                        episode_name='All because of you'
                                        watching={false}
                                    />
                                    <Episode
                                        type={1}
                                        episode={3}
                                        episode_name='All because of you'
                                        watching={false}
                                    />
                                    <Episode
                                        type={1}
                                        episode={4}
                                        episode_name='All because of you'
                                        watching={false}
                                    />
                                    <Episode
                                        type={1}
                                        episode={4}
                                        episode_name='All because of you'
                                        watching={false}
                                    />
                                    <Episode
                                        type={1}
                                        episode={4}
                                        episode_name='All because of you'
                                        watching={false}
                                    />
                                    <Episode
                                        type={1}
                                        episode={4}
                                        episode_name='All because of you'
                                        watching={false}
                                    />
                                    <Episode
                                        type={1}
                                        episode={4}
                                        episode_name='All because of you'
                                        watching={false}
                                    />
                                </div>
                            </div>
                            <div className='lg:w-[75%] w-full flex flex-col'>
                                <img
                                    className='w-full xl:h-[500px] lg:h-[550px] md:h-[550px] h-[300px] object-cover bg-center'
                                    src='https://img.zorores.com/_r/300x400/100/0a/d5/0ad5356f28ee75bccfde8b69ea6a5e54/0ad5356f28ee75bccfde8b69ea6a5e54.jpg'
                                />
                                <div className='flex flex-col space-y-3 px-[10px] py-[15px] bg-[#08090B]'>
                                    <span className='text-[#fff]'>
                                        Watch more seasons of this anime
                                    </span>
                                    <div className='grid grid-cols-5 gap-2 overflow-hidden'>
                                        <div className='relative w-full h-[60px] flex items-center justify-center rounded-md overflow-hidden group cursor-pointer'>
                                            <img
                                                className='w-full h-full object-cover blur-sm'
                                                src='https://img.zorores.com/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg'
                                            />
                                            <span className='absolute top-0 left-0 w-full h-full group-hover:text-[#2196F3] flex items-center justify-center text-[#fff] font-medium md:text-[13px] text-[11px]'>
                                                Bleach Movie 1
                                            </span>
                                        </div>
                                        <div className='relative w-full h-[60px] flex items-center justify-center rounded-md overflow-hidden group cursor-pointer'>
                                            <img
                                                className='w-full h-full object-cover blur-sm'
                                                src='https://img.zorores.com/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg'
                                            />
                                            <span className='absolute top-0 left-0 w-full h-full group-hover:text-[#2196F3] flex items-center justify-center text-[#fff] font-medium md:text-[13px] text-[11px]'>
                                                Bleach Movie 1
                                            </span>
                                        </div>
                                        <div className='relative w-full h-[60px] flex items-center justify-center rounded-md overflow-hidden group cursor-pointer'>
                                            <img
                                                className='w-full h-full object-cover blur-sm'
                                                src='https://img.zorores.com/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg'
                                            />
                                            <span className='absolute top-0 left-0 w-full h-full group-hover:text-[#2196F3] flex items-center justify-center text-[#fff] font-medium md:text-[13px] text-[11px]'>
                                                Bleach Movie 1
                                            </span>
                                        </div>
                                        <div className='relative w-full h-[60px] flex items-center justify-center rounded-md overflow-hidden group cursor-pointer'>
                                            <img
                                                className='w-full h-full object-cover blur-sm'
                                                src='https://img.zorores.com/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg'
                                            />
                                            <span className='absolute top-0 left-0 w-full h-full group-hover:text-[#2196F3] flex items-center justify-center text-[#fff] font-medium md:text-[13px] text-[11px]'>
                                                Bleach Movie 1
                                            </span>
                                        </div>
                                        <div className='relative w-full h-[60px] flex items-center justify-center rounded-md overflow-hidden group cursor-pointer'>
                                            <img
                                                className='w-full h-full object-cover blur-sm'
                                                src='https://img.zorores.com/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg'
                                            />
                                            <span className='absolute top-0 left-0 w-full h-full group-hover:text-[#2196F3] flex items-center justify-center text-[#fff] font-medium md:text-[13px] text-[11px]'>
                                                Bleach Movie 1
                                            </span>
                                        </div>
                                        <div className='relative w-full h-[60px] flex items-center justify-center rounded-md overflow-hidden group cursor-pointer'>
                                            <img
                                                className='w-full h-full object-cover blur-sm'
                                                src='https://img.zorores.com/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg'
                                            />
                                            <span className='absolute top-0 left-0 w-full h-full group-hover:text-[#2196F3] flex items-center justify-center text-[#fff] font-medium md:text-[13px] text-[11px]'>
                                                Bleach Movie 1
                                            </span>
                                        </div>
                                        <div className='relative w-full h-[60px] flex items-center justify-center rounded-md overflow-hidden group cursor-pointer'>
                                            <img
                                                className='w-full h-full object-cover blur-sm'
                                                src='https://img.zorores.com/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg'
                                            />
                                            <span className='absolute top-0 left-0 w-full h-full group-hover:text-[#2196F3] flex items-center justify-center text-[#fff] font-medium md:text-[13px] text-[11px]'>
                                                Bleach Movie 1
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex 2xl:py-0 py-[25px] 2xl:flex-col lg:flex-row 2xl:space-y-4 2xl:space-x-0 lg:space-x-4 space-x-4 2xl:w-[20%] lg:w-full 2xl:px-0 lg:px-[50px]'>
                            <img
                                className='w-[120px] h-[160px] object-cover bg-center'
                                src='https://img.zorores.com/_r/300x400/100/0a/d5/0ad5356f28ee75bccfde8b69ea6a5e54/0ad5356f28ee75bccfde8b69ea6a5e54.jpg'
                            />
                            <div className='flex 2xl:flex-col lg:flex-col flex-col 2xl:space-y-4 lg:space-y-4 space-y-2'>
                                <h1 className='text-[#fff] font-medium text-[25px] line-clamp-2'>
                                    I Got a Cheat Skill in Another World and
                                    Became Unrivaled in The Real World, Too
                                </h1>
                                <div className='flex justify-start items-center space-x-4 text-[#fff] text-[15px]'>
                                    <div className='flex items-center space-x-2'>
                                        <BsPlayCircle />
                                        <span>TV</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <MdOutlineAccessTime />
                                        <span>24</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <FaCalendar />
                                        <span>
                                            {convertMonthNumberToMonthString(1)}{' '}
                                            1, 2023
                                        </span>
                                    </div>
                                </div>
                                <p className='text-[#fff] text-[14px]'>
                                    Apprentice mage Chise Hatori is invited to
                                    enroll at the College, a prestigious
                                    learning institution for sorcerers, to
                                    examine and look for a way to remove the
                                    curses she bears. Despite her groom Elias
                                    Ainsworth's reluctance, Chise accepts the
                                    proposal, as she believes attending the
                                    school might help her minimize her
                                    self-sacrificing tendencies. From the
                                    get-go, Chise grabs the attention of her
                                    classmates and professors alike, who have
                                    never seen a mage in action before. However,
                                    there is a sinister plot brewing behind the
                                    College's back, and the young mage will have
                                    to determine who is friend or foe in order
                                    to put a stop to it
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4 bg-[#202125] px-[20px] pt-[50px] rounded-sm'>
                    <div className='h-full lg:w-[80%] w-full flex flex-col space-y-4'>
                        <div className='bg-[#202125] rounded-sm flex flex-col space-y-4'>
                            <span className='text-[#2196F3] text-[20px] font-semibold'>
                                Comments
                            </span>
                            <div className='flex flex-col space-y-6 bg-[#2A2C31] px-[50px] py-[20px]'>
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
                                                className='rounded-full w-[40px] h-[40px]'
                                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                            />
                                        </div>
                                        <div className='w-full flex flex-col space-y-3'>
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
                                                className='rounded-full w-[40px] h-[40px]'
                                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                            />
                                        </div>
                                        <div className='w-full flex flex-col space-y-2'>
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
                                                                    className='rounded-full w-[40px] h-[40px]'
                                                                    src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                                                />
                                                            </div>
                                                            <div className='w-full flex flex-col space-y-2'>
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
                                                                    className='rounded-full w-[40px] h-[40px]'
                                                                    src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                                                />
                                                            </div>
                                                            <div className='w-full flex flex-col space-y-2'>
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
                                                className='rounded-full w-[40px] h-[40px]'
                                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                            />
                                        </div>
                                        <div className='w-full flex flex-col space-y-2'>
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
                                                className='rounded-full w-[40px] h-[40px]'
                                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                            />
                                        </div>
                                        <div className='w-full flex flex-col space-y-2'>
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
                        <div className='flex flex-col space-y-4 w-full'>
                            <span className='text-[#2196F3] text-[20px] font-semibold'>
                                Recommended for you
                            </span>
                            <div className='grid 2xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4'>
                                <div className='relative w-full h-full rounded-md cursor-pointer'>
                                    <div className='relative flex items-center justify-center group'>
                                        <img src='https://img.zorores.com/_r/300x400/100/11/48/1148deffa03b32f6efbd8a30821f2269/1148deffa03b32f6efbd8a30821f2269.jpg' />
                                        <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                            <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                        <span className='text-[#fff] text-[14px] line-clamp-2'>
                                            Dai-Shogun: Great Revolution
                                        </span>
                                        <div className='flex items-center space-x-4'>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative w-full h-full rounded-md cursor-pointer'>
                                    <div className='relative flex items-center justify-center group'>
                                        <img src='https://img.zorores.com/_r/300x400/100/11/48/1148deffa03b32f6efbd8a30821f2269/1148deffa03b32f6efbd8a30821f2269.jpg' />
                                        <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                            <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                        <span className='text-[#fff] text-[14px] line-clamp-2'>
                                            Dai-Shogun: Great Revolution
                                        </span>
                                        <div className='flex items-center space-x-4'>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative w-full h-full rounded-md cursor-pointer'>
                                    <div className='relative flex items-center justify-center group'>
                                        <img src='https://img.zorores.com/_r/300x400/100/11/48/1148deffa03b32f6efbd8a30821f2269/1148deffa03b32f6efbd8a30821f2269.jpg' />
                                        <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                            <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                        <span className='text-[#fff] text-[14px] line-clamp-2'>
                                            Dai-Shogun: Great Revolution
                                        </span>
                                        <div className='flex items-center space-x-4'>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative w-full h-full rounded-md cursor-pointer'>
                                    <div className='relative flex items-center justify-center group'>
                                        <img src='https://img.zorores.com/_r/300x400/100/11/48/1148deffa03b32f6efbd8a30821f2269/1148deffa03b32f6efbd8a30821f2269.jpg' />
                                        <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                            <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                        <span className='text-[#fff] text-[14px] line-clamp-2'>
                                            Dai-Shogun: Great Revolution
                                        </span>
                                        <div className='flex items-center space-x-4'>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative w-full h-full rounded-md cursor-pointer'>
                                    <div className='relative flex items-center justify-center group'>
                                        <img src='https://img.zorores.com/_r/300x400/100/11/48/1148deffa03b32f6efbd8a30821f2269/1148deffa03b32f6efbd8a30821f2269.jpg' />
                                        <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                            <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                        <span className='text-[#fff] text-[14px] line-clamp-2'>
                                            Dai-Shogun: Great Revolution
                                        </span>
                                        <div className='flex items-center space-x-4'>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative w-full h-full rounded-md cursor-pointer'>
                                    <div className='relative flex items-center justify-center group'>
                                        <img src='https://img.zorores.com/_r/300x400/100/11/48/1148deffa03b32f6efbd8a30821f2269/1148deffa03b32f6efbd8a30821f2269.jpg' />
                                        <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                            <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                        <span className='text-[#fff] text-[14px] line-clamp-2'>
                                            Dai-Shogun: Great Revolution
                                        </span>
                                        <div className='flex items-center space-x-4'>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative w-full h-full rounded-md cursor-pointer'>
                                    <div className='relative flex items-center justify-center group'>
                                        <img src='https://img.zorores.com/_r/300x400/100/11/48/1148deffa03b32f6efbd8a30821f2269/1148deffa03b32f6efbd8a30821f2269.jpg' />
                                        <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                            <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                        <span className='text-[#fff] text-[14px] line-clamp-2'>
                                            Dai-Shogun: Great Revolution
                                        </span>
                                        <div className='flex items-center space-x-4'>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[13px] text-[rgba(255,255,255,.3)]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full lg:w-[20%] w-full bg-[#202125] rounded-sm flex flex-col space-y-4'>
                        <span className='text-[#2196F3] text-[20px] font-semibold'>
                            Most Popular
                        </span>
                        <div className='bg-[#2A2C31] flex flex-col py-[15px] px-[15px] border-solid border-[1px] border-[#2A2C31] rounded-sm'>
                            <div className='flex items-center justify-between border-b-solid border-b-[1px] border-b-[#35373C] py-[15px]'>
                                <div className='flex items-center space-x-3'>
                                    <img
                                        className='w-[45px] h-[60px]'
                                        src='https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg'
                                    />
                                    <div className='flex flex-col space-y-1'>
                                        <span className='text-[#fff] font-semibold'>
                                            One Piece
                                        </span>
                                        <div className='flex items-center space-x-4 text-[#fff]'>
                                            <span className='text-[14px] '>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[14px]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <AiOutlinePlus className='w-[25px] h-[25px] font-semibold text-[#Fff]' />
                            </div>
                            <div className='flex items-center justify-between border-b-solid border-b-[1px] border-b-[#35373C] py-[15px]'>
                                <div className='flex items-center space-x-3'>
                                    <img
                                        className='w-[45px] h-[60px]'
                                        src='https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg'
                                    />
                                    <div className='flex flex-col space-y-1'>
                                        <span className='text-[#fff] font-semibold'>
                                            One Piece
                                        </span>
                                        <div className='flex items-center space-x-4 text-[#fff]'>
                                            <span className='text-[14px] '>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[14px]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <AiOutlinePlus className='w-[25px] h-[25px] font-semibold text-[#Fff]' />
                            </div>
                            <div className='flex items-center justify-between border-b-solid border-b-[1px] border-b-[#35373C] py-[15px]'>
                                <div className='flex items-center space-x-3'>
                                    <img
                                        className='w-[45px] h-[60px]'
                                        src='https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg'
                                    />
                                    <div className='flex flex-col space-y-1'>
                                        <span className='text-[#fff] font-semibold'>
                                            One Piece
                                        </span>
                                        <div className='flex items-center space-x-4 text-[#fff]'>
                                            <span className='text-[14px] '>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[14px]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <AiOutlinePlus className='w-[25px] h-[25px] font-semibold text-[#Fff]' />
                            </div>
                            <div className='flex items-center justify-between border-b-solid border-b-[1px] border-b-[#35373C] py-[15px]'>
                                <div className='flex items-center space-x-3'>
                                    <img
                                        className='w-[45px] h-[60px]'
                                        src='https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg'
                                    />
                                    <div className='flex flex-col space-y-1'>
                                        <span className='text-[#fff] font-semibold'>
                                            One Piece
                                        </span>
                                        <div className='flex items-center space-x-4 text-[#fff]'>
                                            <span className='text-[14px] '>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[14px]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <AiOutlinePlus className='w-[25px] h-[25px] font-semibold text-[#Fff]' />
                            </div>
                            <div className='flex items-center justify-between border-b-solid border-b-[1px] border-b-[#35373C] py-[15px]'>
                                <div className='flex items-center space-x-3'>
                                    <img
                                        className='w-[45px] h-[60px]'
                                        src='https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg'
                                    />
                                    <div className='flex flex-col space-y-1'>
                                        <span className='text-[#fff] font-semibold'>
                                            One Piece
                                        </span>
                                        <div className='flex items-center space-x-4 text-[#fff]'>
                                            <span className='text-[14px] '>
                                                TV
                                            </span>
                                            <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                            <span className='text-[14px]'>
                                                24m
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <AiOutlinePlus className='w-[25px] h-[25px] font-semibold text-[#Fff]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watch
