import Link from 'next/link'
import React from 'react'
import { Relation } from '~/utils/interface'

const RelateAnime = ({ data }: { data: Relation[] }) => {
    return (
        <>
            <div className='h-full w-full rounded-sm flex flex-col space-y-4'>
                <span className='text-[#2196F3] text-[20px] font-semibold'>
                    Related Anime
                </span>
                <div className='bg-[#2A2C31] flex flex-col py-[15px] px-[15px] border-solid border-[1px] border-[#2A2C31] rounded-sm'>
                    {data
                        ? data?.map((relate_anime: Relation, index: number) => {
                              if (index + 1 < data.length) {
                                  return (
                                      <Link
                                          key={relate_anime.id}
                                          href={`/detail?id=${relate_anime.id}`}
                                      >
                                          <div className=' cursor-pointer flex items-center space-x-4 py-[15px] border-b-solid border-b-[1px] border-b-[#35373C]'>
                                              <img
                                                  className='w-[45px] h-[60px]'
                                                  src={relate_anime.image}
                                              />
                                              <div className='flex flex-col space-y-1'>
                                                  <span
                                                      style={{
                                                          color: relate_anime.color,
                                                      }}
                                                      className='text-[#fff] text-[14px] font-semibold line-clamp-2'
                                                  >
                                                      {
                                                          relate_anime.title
                                                              .romaji
                                                      }
                                                  </span>
                                                  <div className='flex items-center space-x-4 text-[#fff]'>
                                                      <span className='text-[14px] '>
                                                          {relate_anime.type}
                                                      </span>
                                                  </div>
                                              </div>
                                          </div>
                                      </Link>
                                  )
                              } else {
                                  return (
                                      <Link
                                          key={relate_anime.id}
                                          href={`/detail?id=${relate_anime.id}`}
                                      >
                                          <div className=' cursor-pointer flex items-center space-x-4 py-[15px]'>
                                              <img
                                                  className='w-[45px] h-[60px]'
                                                  src={relate_anime.image}
                                              />
                                              <div className='flex flex-col space-y-1'>
                                                  <span
                                                      style={{
                                                          color: relate_anime.color,
                                                      }}
                                                      className='text-[#fff] text-[14px] font-semibold line-clamp-2'
                                                  >
                                                      {
                                                          relate_anime.title
                                                              .romaji
                                                      }
                                                  </span>
                                                  <div className='flex items-center space-x-4 text-[#fff]'>
                                                      <span className='text-[14px] '>
                                                          {relate_anime.type}
                                                      </span>
                                                  </div>
                                              </div>
                                          </div>
                                      </Link>
                                  )
                              }
                          })
                        : Array.from(new Array(20)).map(() => (
                              <div className='w-full h-full skeleton'></div>
                          ))}
                </div>
            </div>
        </>
    )
}

export default RelateAnime
