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
} from '~/components'
import { TrendingAnime } from '~/utils/interface'
import AiringAnime from '~/components/AiringAnime'
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
                <div className='flex'>
                    <div className='w-[75%] h-full flex flex-col space-y-3'>
                        <AiringAnime />
                        <RecentAnime />
                        <Popular />
                    </div>
                    <div className='w-[25%] h-full flex flex-col'>
                        <Genres />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
