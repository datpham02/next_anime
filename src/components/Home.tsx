import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { MdOutlineAccessTime } from 'react-icons/md'
import { FaCalendar, FaPlayCircle } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import Slider from 'react-slick'
import { convertMonthNumberToMonthString } from '../utils/function'
const Home = () => {
    const settingSlider = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <>
            <div>
                <Slider {...settingSlider}>
                    <div>
                        <div className='relative flex items-center justify-center outline-none 2xl:h-[700px]  xl:h-[600px] lg:h-[600px] md:h-[500px] h-[450px] w-full overflow-hidden  '>
                            <img
                                className='w-full h-full object-cover bg-center bg-no-repeat '
                                src='https://img5.thuthuatphanmem.vn/uploads/2021/11/12/hinh-anh-anime-don-gian-hinh-nen-anime-don-gian-ma-dep_092443354.png'
                            />
                            <div className='before-slider'></div>
                            <div className='after-slider'></div>
                            <div className='absolute flex items-center w-full h-full z-[1] text-[#fff] px-[35px] md:pt-[85px] pt-[190px] '>
                                <div className='md:w-[50%] w-[80%] flex flex-col space-y-4'>
                                    <h1 className='line-clamp-2 font-bold 2xl:text-[60px] xl:text-[40px] lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px]'>
                                        I Got a Cheat Skill in Another World and
                                        Became Unrivaled in The Real World, Too
                                    </h1>
                                    <div className='md:flex hidden items-center space-x-4 '>
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
                                    <p className='xl:line-clamp-3 line-clamp-2 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:[11px] text-[10px]'>
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
                                    <div className='flex items-center space-x-4'>
                                        <button className='flex items-center space-x-2 bg-[#f6e58d] 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:[13px] text-[12px] 2xl:px-[20px] 2xl:py-[8px] xl:px-[18px] xl:py-[6px] lg:px-[18px] lg:py-[6px] md:px-[16px] md:py-[8px] sm:px-[14px] sm:py-[8px] px-[12px] py-[8px] rounded-full'>
                                            <FaPlayCircle />
                                            <span>Watch Now</span>
                                        </button>
                                        <button className='flex items-center space-x-2 bg-[#95afc0] 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:[13px] text-[12px] 2xl:px-[20px] 2xl:py-[8px] xl:px-[18px] xl:py-[6px] lg:px-[18px] lg:py-[6px] md:px-[16px] md:py-[8px] sm:px-[14px] sm:py-[8px] px-[12px] py-[8px] rounded-full'>
                                            <span>Detail</span>
                                            <IoIosArrowForward />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Home
