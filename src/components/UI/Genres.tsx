import Link from 'next/link'
import React from 'react'
const data = [
    'Action',
    'Adventure',
    'Comedy',
    'Demons',
    'Drama',
    'Ecchi',
    'Fantasy',
    'Game',
    'Harem',
    'Historical',
    'Horror',
    'Josei',
    'Kids',
    'Magic',
    'Martial Arts',
    'Mecha',
    'Military',
    'Music',
    'Mystery',
    'Parody',
    'Police',
    'Psychological',
    'Romance',
    'Samurai',
    'School',
    'Sci-Fi',
    'Seinen',
    'Shoujo',
    'Shoujo Ai',
    'Shounen',
    'Shounen Ai',
    'Slice of Life',
    'Space',
    'Sports',
    'Super Power',
    'Supernatural',
    'Thriller',
    'Vampire',
]

const Genres = () => {
    return (
        <>
            <div className='flex flex-col space-y-4 px-[15px]'>
                <span className='text-[#2196F3] text-[20px] font-semibold'>
                    Genres
                </span>
                <div className='flex flex-wrap bg-[#2A2C31] text-[#fff] text-[13px] px-[15px] py-[10px]'>
                    {data.map((genres) => (
                        <Link href={`/genres/${genres}`} key={genres}>
                            <span className='hover:bg-[#414248] cursor-pointer px-[10px] py-[12px] rounded-md flex'>
                                {genres}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Genres
