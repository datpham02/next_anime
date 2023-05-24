import React, { useEffect, useRef, useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { FaCalendar, FaPlayCircle } from 'react-icons/fa'
import { MdOutlineAccessTime } from 'react-icons/md'
import { convertMonthNumberToMonthString } from '../utils/function'
import { AiOutlinePlus } from 'react-icons/ai'

const Detail = () => {
    return (
        <>
            <div className='w-full h-full'>
                <div className='flex xl:flex-row flex-col'>
                    <div className='relative xl:w-[80%] w-full xl:h-[600px] lg:h-[600px] md:h-[700px] sm:h-[650px]  h-[700px]'>
                        <img
                            className='w-full h-full object-cover bg-center blur-xl'
                            src='https://img.zorores.com/_r/300x400/100/0a/d5/0ad5356f28ee75bccfde8b69ea6a5e54/0ad5356f28ee75bccfde8b69ea6a5e54.jpg'
                        />
                        <div className='absolute flex xl:flex-row flex-col xl:space-y-0 space-y-4 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]'>
                            <div className='flex sm:flex-row sm:items-start sm:space-x-6 sm:space-y-0 sm:px-[20px] flex-col space-y-6 justify-center items-center  mt-[100px]'>
                                <img
                                    className='w-[180px] h-[260px] object-cover bg-center'
                                    src='https://img.zorores.com/_r/300x400/100/0a/d5/0ad5356f28ee75bccfde8b69ea6a5e54/0ad5356f28ee75bccfde8b69ea6a5e54.jpg'
                                />
                                <div className='flex flex-col space-y-6'>
                                    <h1 className='sm:text-left text-center text-[#fff] font-medium 2xl:text-[50px] xl:text-[40px] lg:text-[30px] md:text-[30px] sm:text-[25px] text-[22px]'>
                                        I Got a Cheat Skill in Another World and
                                        Became Unrivaled in The Real World, Too
                                    </h1>
                                    <div className='flex sm:justify-start items-center justify-center space-x-4 text-[#fff]'>
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
                                                {convertMonthNumberToMonthString(
                                                    1,
                                                )}{' '}
                                                1, 2023
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex sm:justify-start justify-center items-center space-x-4'>
                                        <button className='flex items-center space-x-2 bg-[#f6e58d] 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:[13px] text-[12px] 2xl:px-[20px] 2xl:py-[8px] xl:px-[18px] xl:py-[6px] lg:px-[18px] lg:py-[6px] md:px-[16px] md:py-[8px] sm:px-[14px] sm:py-[8px] px-[12px] py-[8px] rounded-full'>
                                            <FaPlayCircle />
                                            <span>Watch Now</span>
                                        </button>
                                        <button className='flex items-center space-x-2 bg-[#fff] 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:[13px] text-[12px] 2xl:px-[20px] 2xl:py-[8px] xl:px-[18px] xl:py-[6px] lg:px-[18px] lg:py-[6px] md:px-[16px] md:py-[8px] sm:px-[14px] sm:py-[8px] px-[12px] py-[8px] rounded-full'>
                                            <AiOutlinePlus />
                                            <span>Add to List</span>
                                        </button>
                                    </div>
                                    <p className='text-[#fff] sm:text-justify 2xl:text-[15px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] sm:block hidden'>
                                        Apprentice mage Chise Hatori is invited
                                        to enroll at the College, a prestigious
                                        learning institution for sorcerers, to
                                        examine and look for a way to remove the
                                        curses she bears. Despite her groom
                                        Elias Ainsworth's reluctance, Chise
                                        accepts the proposal, as she believes
                                        attending the school might help her
                                        minimize her self-sacrificing
                                        tendencies. From the get-go, Chise grabs
                                        the attention of her classmates and
                                        professors alike, who have never seen a
                                        mage in action before. However, there is
                                        a sinister plot brewing behind the
                                        College's back, and the young mage will
                                        have to determine who is friend or foe
                                        in order to put a stop to it
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-[20%] w-full bg-[rgba(255,255,255,.1)] text-[#fff] sm:text-[14px] text-[13px] font-medium xl:py-[100px] py-[40px] px-[25px]'>
                        <div className='sm:hidden block'>
                            <span>Overview:</span>
                            <p className='h-[100px] text-[#fff] text-[13px] opacity-50 overflow-y-auto'>
                                Apprentice mage Chise Hatori is invited to
                                enroll at the College, a prestigious learning
                                institution for sorcerers, to examine and look
                                for a way to remove the curses she bears.
                                Despite her groom Elias Ainsworth's reluctance,
                                Chise accepts the proposal, as she believes
                                attending the school might help her minimize her
                                self-sacrificing tendencies. From the get-go,
                                Chise grabs the attention of her classmates and
                                professors alike, who have never seen a mage in
                                action before. However, there is a sinister plot
                                brewing behind the College's back, and the young
                                mage will have to determine who is friend or foe
                                in order to put a stop to it
                            </p>
                        </div>
                        <div className='flex flex-col border-b-solid border-b-[1px] border-b-[#594B51] py-[10px] space-y-2'>
                            <div>
                                <span>Japanese:</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Synonyms:</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Aired:</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Premiered:</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Duration:</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Status:</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Rating:</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Views:</span>
                                <span></span>
                            </div>
                        </div>
                        <div className='border-b-solid border-b-[1px] border-b-[#594B51] py-[10px]'>
                            <span>Genres:</span>
                            <span></span>
                        </div>
                        <div className='space-y-2 py-[10px]'>
                            <div>
                                <span>Studios:</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Producers:</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail
