import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Slider from 'react-slick'
import { getTredingAnime } from '~/utils/API'
import { TrendingAnime } from '~/utils/interface'

const Trending = () => {
    const settingSlider = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
    }
    const { data, isSuccess } = useQuery({
        queryKey: ['trending_anime'],
        queryFn: async () => {
            const data = await getTredingAnime(1, 20)
            return data
        },
    })
    return (
        <>
            <div className='w-full flex flex-col space-y-4 px-[15px]'>
                <span className='text-[#2196F3] text-[25px] font-semibold'>
                    Trending
                </span>
                <Slider {...settingSlider}>
                    {data?.results.map(
                        (trending_anime: TrendingAnime, index: number) => {
                            return (
                                <div
                                    key={trending_anime.id}
                                    className='pr-[10px]'
                                >
                                    <div className='flex w-auto h-[250px]'>
                                        <div className='w-[20%] flex-col space-y-16 justify-end items-center text-[#fff] trending-title-bg-color sm:flex hidden'>
                                            <span className='w-[150px] inline-block rotate-[-90deg] whitespace-nowrap text-ellipsis overflow-hidden'>
                                                {trending_anime.title.romaji}
                                            </span>
                                            <div className='w-full text-[#2196F3] text-center font-bold text-[25px]'>
                                                {index + 1 > 9
                                                    ? index + 1
                                                    : `0${index + 1}`}
                                            </div>
                                        </div>
                                        <div className='w-[80%] h-[285px]'>
                                            <img
                                                src={trending_anime.image}
                                                className='w-full h-full object-cover'
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                    )}
                </Slider>
            </div>
        </>
    )
}

export default Trending
