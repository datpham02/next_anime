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
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
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
                                    <div className='flex w-auto h-auto'>
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
                                        <div className='2xl:w-[80%] 2xl:h-[285px] xl:w-[245px] xl:h-[330px] lg:w-[200px] lg:h-[300px] md:w-[180px] md:h-[280px] w-[170px] h-[270px]'>
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
