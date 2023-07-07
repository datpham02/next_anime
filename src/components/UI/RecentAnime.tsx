import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { getRecentAnime } from '~/utils/API'
import { RecentAnime } from '~/utils/interface'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

const RecentAnime = () => {
    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['recent_anime'],
        queryFn: async () => {
            const data = await getRecentAnime(1, 20, 'gogoanime')

            return data
        },
    })

    return (
        <>
            <div className='flex flex-col space-y-4 px-[15px]'>
                <span className='text-[#2196F3] text-[20px] font-semibold'>
                    Recent Anime
                </span>
                <div className='flex flex-col space-y-4'>
                    <div className='grid 2xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4'>
                        {isLoading
                            ? Array.from(new Array(20)).map(() => (
                                  <div className='w-full h-full skeleton'></div>
                              ))
                            : data?.results?.map(
                                  (recent_anime: RecentAnime) => {
                                      return (
                                          <Link
                                              key={recent_anime.id}
                                              href={`/detail?id=${recent_anime.id}`}
                                          >
                                              <div className='w-full h-full rounded-md cursor-pointer'>
                                                  <div className='h-[80%] relative flex items-center justify-center group'>
                                                      <div className='after:anime-poster-bg'></div>
                                                      <img
                                                          className='w-full h-full object-cover'
                                                          src={
                                                              recent_anime.image
                                                          }
                                                      />
                                                      <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                                          <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                                      </div>
                                                  </div>
                                                  <div className='h-[20%] flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                                      <span
                                                          style={{
                                                              color: recent_anime.color,
                                                          }}
                                                          className='text-[#fff] font-medium text-[14px] line-clamp-2'
                                                      >
                                                          {
                                                              recent_anime.title
                                                                  .romaji
                                                          }
                                                      </span>
                                                  </div>
                                              </div>
                                          </Link>
                                      )
                                  },
                              )}
                    </div>
                    <Link href={'/recent'}>
                        <div className='flex justify-end cursor-pointer group'>
                            <div className='flex items-center text-[#2196F3] group-hover:underline'>
                                <span>View more</span>
                                <MdKeyboardArrowRight className='w-[20px] h-[20px]' />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RecentAnime
