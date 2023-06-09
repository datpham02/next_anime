import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { useQuery } from '@tanstack/react-query'
import { getTredingAnime } from '~/utils/API'
import {
    Genres,
    Popular,
    RecentAnime,
    SliderItem,
    Trending,
} from '~/components/UI'
import { TrendingAnime } from '~/utils/interface'
import AiringAnime from '~/components/UI/AiringAnime'
const Home = () => {
    const { data, isSuccess } = useQuery({
        queryKey: ['trending_anime'],
        queryFn: async () => {
            const data = await getTredingAnime(1, 20)
            return data
        },
    })

    const settingSlider = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    return (
        <>
            <div className='flex flex-col space-y-4 overflow-hidden'>
                <Slider {...settingSlider}>
                    {data?.results.map((trending_anime: TrendingAnime) => {
                        return (
                            <SliderItem
                                key={trending_anime.id}
                                TrendingAnime={trending_anime}
                            />
                        )
                    })}
                </Slider>
                <Trending />
                <div className='flex lg:flex-row flex-col-reverse'>
                    <div className='lg:w-[75%] w-full h-full flex flex-col space-y-3'>
                        <AiringAnime />
                        <RecentAnime />
                        <Popular />
                    </div>
                    <div className='lg:w-[25%] lg:mb-0 mb-[30px] w-full h-full flex flex-col'>
                        <Genres />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
