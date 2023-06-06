import React from 'react'
import { Character } from '~/utils/interface'

const Characters = ({ characters }: { characters: Character[] }) => {
    return (
        <>
            {characters ? (
                <div className='flex flex-col space-y-4 px-[20px]'>
                    <span className='text-[#2196F3] text-[20px] font-semibold'>
                        Characters & Voice Actors
                    </span>
                    <div className='z-[1] grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2'>
                        {characters.map((character: Character) => (
                            <div
                                key={character.id}
                                className='flex justify-between items-center px-[10px] py-[20px] bg-[#35373D] rounded-md'
                            >
                                <div className='flex items-center space-x-3'>
                                    <img
                                        className='rounded-full w-[45px] h-[45px] object-cover'
                                        src={character?.image}
                                    />
                                    <div className='flex flex-col'>
                                        <span className='text-[#fff] text-[13px]'>
                                            {character?.name?.full}
                                        </span>
                                        <span className='text-[#ccc] text-[12px]'>
                                            {character?.role}
                                        </span>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <img
                                        className='rounded-full w-[45px] h-[45px] object-cover'
                                        src={character?.voiceActors[0]?.image}
                                    />
                                    <div className='flex flex-col'>
                                        <span className='text-[#fff] text-[13px]'>
                                            {
                                                character?.voiceActors[0]?.name
                                                    .full
                                            }
                                        </span>
                                        <span className='text-[#ccc] text-[12px]'>
                                            {
                                                character?.voiceActors[0]
                                                    ?.language
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Characters
