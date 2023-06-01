import React from 'react'
import { EpisodeProps } from '../utils/interface'
import { BsFillPlayCircleFill, BsFillPlayFill } from 'react-icons/bs'

const Episode = ({ type, episode, episode_name, watching }: EpisodeProps) => {
    if (type == 1) {
        return (
            <>
                {episode % 2 == 0 ? (
                    <div
                        className={`relative w-full hover:bg-[#423E46] cursor-pointer flex items-center justify-between px-[15px] py-[8px] text-[#fff]`}
                    >
                        {watching && (
                            <span className='absolute w-[5px] h-full bg-[#2196F3] left-0'></span>
                        )}
                        <div className='flex items-center text-[14px] space-x-4'>
                            <span className='font-semibold'>{episode}</span>
                            <span className=''>{episode_name}</span>
                        </div>
                        {watching && (
                            <div className='w-[22px] h-[22px] bg-[#2196F3] flex items-center justify-center rounded-full'>
                                <BsFillPlayFill />
                            </div>
                        )}
                    </div>
                ) : (
                    <div
                        className={`relative w-full hover:bg-[#423E46] bg-[#2B2C30] cursor-pointer flex items-center justify-between px-[15px] py-[8px] text-[#fff]`}
                    >
                        {watching && (
                            <span className='absolute w-[5px] h-full bg-[blue] left-0'></span>
                        )}
                        <div className='flex items-center text-[14px] space-x-4'>
                            <span className='font-semibold'>{episode}</span>
                            <span className=''>{episode_name}</span>
                        </div>
                        {watching && (
                            <div className='w-[22px] h-[22px] bg-[#2196F3] flex items-center justify-center rounded-full'>
                                <BsFillPlayFill />
                            </div>
                        )}
                    </div>
                )}
            </>
        )
    } else if (type == 2) {
        return (
            <>
                <span className='w-[50px] h-[35px] bg-[#fff] rounded-sm flex items-center justify-center'>
                    {episode}
                </span>
            </>
        )
    }

    return (
        <>
            <div className='flex items-center justify-between px-[8px]'>
                <div>
                    <span>{episode}</span>
                    <span>{episode_name}</span>
                </div>
                <BsFillPlayCircleFill />
            </div>
        </>
    )
}

export default Episode
