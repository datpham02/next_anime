import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { useQuery } from '@tanstack/react-query'
import { getTredingAnime } from '~/utils/API'
import { SliderItem, Trending } from '~/components'
import { TrendingAnime } from '~/utils/interface'
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
            <div className='flex flex-col space-y-4 pb-[50px]'>
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
            </div>
        </>
    )
}

export default Home
