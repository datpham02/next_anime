import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { getAiringAnime } from '~/utils/API'
import Loading from '../Loading'
import { AiringAnime } from '~/utils/interface'
import { convertTimeStamp, formatTime } from '~/utils/function'
import Link from 'next/link'
const AiringAnime = () => {
    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['airing_anime'],
        queryFn: async () => {
            const data = await getAiringAnime(1, 20)

            return data
        },
    })

    const handleData = (airing_anime: AiringAnime[]) => {
        if (airing_anime.length <= 0) return []
        let showTimes: {
            minute: number
            hour: number
            day: number
            month: number
            year: number
        }[] = []

        airing_anime.forEach((data: AiringAnime) => {
            let airingTime = convertTimeStamp(data.airingAt)
            const isElementExists = showTimes.some((item) => {
                return (
                    item.hour === airingTime.hour &&
                    item.minute == airingTime.minute
                )
            })

            if (!isElementExists) {
                showTimes.push({
                    minute: airingTime.minute,
                    hour: airingTime.hour,
                    day: airingTime.day,
                    month: airingTime.month,
                    year: airingTime.year,
                })
            }
        })
        var result: {
            airingTime: {
                minute: number
                hour: number
                day: number
                month: number
                year: number
            }
            anime: AiringAnime[]
        }[] = []
        showTimes.forEach(
            (time: {
                minute: number
                hour: number
                day: number
                month: number
                year: number
            }) => {
                let data = airing_anime.filter((airing_anime: AiringAnime) => {
                    const airingTime = convertTimeStamp(airing_anime.airingAt)
                    return (
                        airingTime.hour === time.hour &&
                        airingTime.minute === time.minute
                    )
                })
                result.push({
                    airingTime: time,
                    anime: data,
                })
            },
        )

        return result
    }
    // useEffect(() => {
    //     if (isSuccess) {
    //         console.log(handleData(data.results))
    //     }
    // }, [isSuccess])
    return (
        <>
            {data?.results.length > 0 ? (
                <div className='flex flex-col space-y-4 px-[15px]'>
                    <span className='text-[#2196F3] text-[20px] font-semibold'>
                        Anime Airing Today
                    </span>
                    <div className='flex flex-col space-y-3'>
                        {isLoading
                            ? Array.from(new Array(20)).map(() => (
                                  <div className='w-full h-full skeleton'></div>
                              ))
                            : handleData(data.results).map(
                                  (
                                      data: {
                                          airingTime: {
                                              minute: number
                                              hour: number
                                              day: number
                                              month: number
                                              year: number
                                          }
                                          anime: AiringAnime[]
                                      },
                                      index: number,
                                  ) => {
                                      return (
                                          <div
                                              key={data.airingTime.hour + index}
                                              className='flex flex-col bg-[#373738]'
                                          >
                                              <div className='flex text-[#2196F3] text-[18px] font-semibold px-[10px] py-[15px]'>
                                                  {`Airing at ${formatTime(
                                                      data.airingTime,
                                                  )}`}
                                              </div>
                                              <div className='grid 2xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 py-[15px] px-[15px]'>
                                                  {data.anime.map(
                                                      (
                                                          airing_anime: AiringAnime,
                                                          index: number,
                                                      ) => (
                                                          <Link
                                                              key={
                                                                  airing_anime.id +
                                                                  index
                                                              }
                                                              href={`/detail?id=${airing_anime.id}`}
                                                          >
                                                              <div
                                                                  key={
                                                                      airing_anime.id
                                                                  }
                                                                  className='w-full h-full rounded-md cursor-pointer'
                                                              >
                                                                  <div className='h-[80%] relative flex items-center justify-center group'>
                                                                      <div className='after:anime-poster-bg'></div>
                                                                      <img
                                                                          className='w-full h-full object-cover'
                                                                          src={
                                                                              airing_anime.image
                                                                          }
                                                                      />
                                                                      <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                                                          <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                                                      </div>
                                                                  </div>
                                                                  <div className='h-[20%] flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                                                      <span
                                                                          style={{
                                                                              color: airing_anime.color,
                                                                          }}
                                                                          className='text-[#fff] font-medium text-[14px] line-clamp-2'
                                                                      >
                                                                          {
                                                                              airing_anime
                                                                                  .title
                                                                                  .romaji
                                                                          }
                                                                      </span>
                                                                  </div>
                                                              </div>
                                                          </Link>
                                                      ),
                                                  )}
                                              </div>
                                          </div>
                                      )
                                  },
                              )}
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default AiringAnime

// data?.results?.map((airing_anime: AiringAnime) => {
//     return (
//         <div
//             key={airing_anime.id}
//             className='w-full h-full rounded-md cursor-pointer'
//         >
//             <div className='h-[80%] relative flex items-center justify-center group'>
//                 <div className='after:anime-poster-bg'></div>
//                 <img
//                     className='w-full h-full object-cover'
//                     src={airing_anime.image}
//                 />
//                 <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
//                     <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
//                 </div>
//             </div>
//             <div className='h-[20%] flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
//                 <span
//                     style={{
//                         color: airing_anime.color,
//                     }}
//                     className='text-[#fff] font-medium text-[14px] line-clamp-2'
//                 >
//                     {airing_anime.title.romaji}
//                 </span>
//             </div>
//         </div>
//     )
// })
