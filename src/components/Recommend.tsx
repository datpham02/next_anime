import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { RecommendProps } from '../utils/interface'

const Recommend = ({ data, props }: RecommendProps) => {
    return (
        <>
            <div {...props}>
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
        </>
    )
}
export default Recommend
