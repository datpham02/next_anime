import React, { ChangeEvent, useState } from 'react'
import { Episode } from '../../utils/interface'
import { BsFillPlayFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { AiOutlineSearch } from 'react-icons/ai'

const Episode = ({ data }: { data: Episode[] }) => {
    const router = useRouter()

    const [episodeFind, setEpisodeFind] = useState<string | undefined>(
        undefined,
    )

    const onChangeEpisodeFindInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEpisodeFind(e.target.value)
    }
    return (
        <>
            <div className='flex items-center justify-between px-[10px] py-[12px]'>
                <span className='text-[#fff] text-[14px]'>
                    List of episodes:
                </span>
                <div className='relative flex items-center'>
                    <input
                        placeholder='Number of Ep'
                        value={episodeFind}
                        onChange={(e) => {
                            onChangeEpisodeFindInput(e)
                        }}
                        className='outline-none rounded-md w-[140px] bg-[#14151A] border-solid border-[1px] border-[#35373D] placeholder:text-[12px] pl-[33px] py-[4px] focus:text-[#fff]'
                    />
                    <AiOutlineSearch className='absolute left-[10px] text-[#fff]' />
                </div>
            </div>
            <div className='flex flex-wrap p-[8px] gap-1'>
                {data.length < 12
                    ? data.map((episode: Episode, index: number) => {
                          if ((index + 1) % 2 == 0) {
                              if (episodeFind) {
                                  if (index + 1 == parseInt(episodeFind)) {
                                      return (
                                          <div
                                              key={episode.id}
                                              className={`relative w-full animate-pulse bg-[#423E46] cursor-pointer flex items-center justify-between px-[15px] py-[8px] text-[#2196F3]`}
                                          >
                                              {/* <div className='absolute animate-ping bg-[#423E46] w-full h-full'></div> */}
                                              {episode.id ==
                                                  router?.query.episode && (
                                                  <span className='absolute w-[5px] h-full bg-[#2196F3] left-0'></span>
                                              )}
                                              <div className='flex items-center text-[14px] space-x-4'>
                                                  <span className='font-semibold'>
                                                      {index + 1}
                                                  </span>
                                                  <span className=''>
                                                      {episode.title}
                                                  </span>
                                              </div>
                                              {episode.id ==
                                                  router?.query.episode && (
                                                  <div className='w-[22px] h-[22px] bg-[#2196F3] flex items-center justify-center rounded-full'>
                                                      <BsFillPlayFill />
                                                  </div>
                                              )}
                                          </div>
                                      )
                                  } else {
                                      return (
                                          <div
                                              key={episode.id}
                                              className={`relative w-full hover:bg-[#423E46] cursor-pointer flex items-center justify-between px-[15px] py-[8px] text-[#fff]`}
                                          >
                                              {/* <div className='absolute animate-ping bg-[#423E46] w-full h-full'></div> */}
                                              {episode.id ==
                                                  router?.query.episode && (
                                                  <span className='absolute w-[5px] h-full bg-[#2196F3] left-0'></span>
                                              )}
                                              <div className='flex items-center text-[14px] space-x-4'>
                                                  <span className='font-semibold'>
                                                      {index + 1}
                                                  </span>
                                                  <span className=''>
                                                      {episode.title}
                                                  </span>
                                              </div>
                                              {episode.id ==
                                                  router?.query.episode && (
                                                  <div className='w-[22px] h-[22px] bg-[#2196F3] flex items-center justify-center rounded-full'>
                                                      <BsFillPlayFill />
                                                  </div>
                                              )}
                                          </div>
                                      )
                                  }
                              } else {
                                  return (
                                      <div
                                          key={episode.id}
                                          className={`relative w-full hover:bg-[#423E46] cursor-pointer flex items-center justify-between px-[15px] py-[8px] text-[#fff]`}
                                      >
                                          {/* <div className='absolute animate-ping bg-[#423E46] w-full h-full'></div> */}
                                          {episode.id ==
                                              router?.query.episode && (
                                              <span className='absolute w-[5px] h-full bg-[#2196F3] left-0'></span>
                                          )}
                                          <div className='flex items-center text-[14px] space-x-4'>
                                              <span className='font-semibold'>
                                                  {index + 1}
                                              </span>
                                              <span className=''>
                                                  {episode.title}
                                              </span>
                                          </div>
                                          {episode.id ==
                                              router?.query.episode && (
                                              <div className='w-[22px] h-[22px] bg-[#2196F3] flex items-center justify-center rounded-full'>
                                                  <BsFillPlayFill />
                                              </div>
                                          )}
                                      </div>
                                  )
                              }
                          } else {
                              if (episodeFind) {
                                  if (index + 1 == parseInt(episodeFind)) {
                                      return (
                                          <div
                                              key={episode.id}
                                              className={`relative w-full bg-[#423E46] animate-pulse cursor-pointer flex items-center justify-between px-[15px] py-[8px] text-[#2196F3]`}
                                          >
                                              {episode.id ==
                                                  router?.query.episode && (
                                                  <span className='absolute w-[5px] h-full bg-[blue] left-0'></span>
                                              )}
                                              <div className='flex items-center text-[14px] space-x-4'>
                                                  <span className='font-semibold'>
                                                      {index + 1}
                                                  </span>
                                                  <span className=''>
                                                      {episode.title}
                                                  </span>
                                              </div>
                                              {episode.id ==
                                                  router?.query.episode && (
                                                  <div className='w-[22px] h-[22px] bg-[#2196F3] flex items-center justify-center rounded-full'>
                                                      <BsFillPlayFill />
                                                  </div>
                                              )}
                                          </div>
                                      )
                                  } else {
                                      return (
                                          <div
                                              key={episode.id}
                                              className={`relative w-full hover:bg-[#423E46] bg-[#2B2C30] cursor-pointer flex items-center justify-between px-[15px] py-[8px] text-[#fff]`}
                                          >
                                              {episode.id ==
                                                  router?.query.episode && (
                                                  <span className='absolute w-[5px] h-full bg-[blue] left-0'></span>
                                              )}
                                              <div className='flex items-center text-[14px] space-x-4'>
                                                  <span className='font-semibold'>
                                                      {index + 1}
                                                  </span>
                                                  <span className=''>
                                                      {episode.title}
                                                  </span>
                                              </div>
                                              {episode.id ==
                                                  router?.query.episode && (
                                                  <div className='w-[22px] h-[22px] bg-[#2196F3] flex items-center justify-center rounded-full'>
                                                      <BsFillPlayFill />
                                                  </div>
                                              )}
                                          </div>
                                      )
                                  }
                              } else {
                                  return (
                                      <div
                                          key={episode.id}
                                          className={`relative w-full hover:bg-[#423E46] bg-[#2B2C30] cursor-pointer flex items-center justify-between px-[15px] py-[8px] text-[#fff]`}
                                      >
                                          {episode.id ==
                                              router?.query.episode && (
                                              <span className='absolute w-[5px] h-full bg-[blue] left-0'></span>
                                          )}
                                          <div className='flex items-center text-[14px] space-x-4'>
                                              <span className='font-semibold'>
                                                  {index + 1}
                                              </span>
                                              <span className=''>
                                                  {episode.title}
                                              </span>
                                          </div>
                                          {episode.id ==
                                              router?.query.episode && (
                                              <div className='w-[22px] h-[22px] bg-[#2196F3] flex items-center justify-center rounded-full'>
                                                  <BsFillPlayFill />
                                              </div>
                                          )}
                                      </div>
                                  )
                              }
                          }
                      })
                    : data.map((episode: Episode, index: number) => {
                          if (episode.id == router?.query.episode) {
                              if (episodeFind) {
                                  if (index + 1 == parseInt(episodeFind)) {
                                      return (
                                          <span
                                              key={episode.id}
                                              className='w-[50px] h-[35px]  bg-[#2196F3] animate-pulse rounded-sm flex items-center justify-center cursor-pointer'
                                          >
                                              {index + 1}
                                          </span>
                                      )
                                  } else {
                                      return (
                                          <span
                                              key={episode.id}
                                              className='w-[50px] h-[35px]  bg-[#2196F3] rounded-sm flex items-center justify-center cursor-pointer'
                                          >
                                              {index + 1}
                                          </span>
                                      )
                                  }
                              } else {
                                  return (
                                      <span
                                          key={episode.id}
                                          className='w-[50px] h-[35px]  bg-[#2196F3] rounded-sm flex items-center justify-center cursor-pointer'
                                      >
                                          {index + 1}
                                      </span>
                                  )
                              }
                          } else {
                              if (episodeFind) {
                                  if (index + 1 == parseInt(episodeFind)) {
                                      return (
                                          <span
                                              key={episode.id}
                                              className='w-[50px] h-[35px] bg-[#2196F3] animate-pulse rounded-sm flex items-center justify-center cursor-pointer'
                                          >
                                              {index + 1}
                                          </span>
                                      )
                                  } else {
                                      return (
                                          <span
                                              key={episode.id}
                                              className='w-[50px] h-[35px] bg-[#fff] rounded-sm flex items-center justify-center cursor-pointer'
                                          >
                                              {index + 1}
                                          </span>
                                      )
                                  }
                              } else {
                                  return (
                                      <span
                                          key={episode.id}
                                          className='w-[50px] h-[35px] bg-[#fff] rounded-sm flex items-center justify-center cursor-pointer'
                                      >
                                          {index + 1}
                                      </span>
                                  )
                              }
                          }
                      })}
            </div>
        </>
    )
}

export default Episode
