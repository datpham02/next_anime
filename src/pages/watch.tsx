import React from 'react'
import { EpisodeComponent, Recommend, RelateAnime, Comment } from '~/components'
import dynamic from 'next/dynamic'
import { GetServerSidePropsContext } from 'next/types'
import { getAnimeEpisodeStreamingLink, getAnimeInfo } from '~/utils/API'
import { AnimeInfo, EpisodeSource } from '~/utils/interface'

const VideoPlayer = dynamic(() => import('../components/VideoPlayer'), {
    ssr: false,
})

const Watch = ({
    anime_info,
    currentEpisode,
    episodeId,
}: {
    anime_info: AnimeInfo
    currentEpisode: EpisodeSource
    episodeId: string
}) => {
    return (
        <>
            <div>
                <div className='flex lg:flex-row flex-col-reverse'>
                    <div className='lg:w-[25%]  w-full flex flex-col bg-[#14151A] lg:pb-0 pb-[25px]'>
                        <EpisodeComponent data={anime_info.episodes} />
                    </div>
                    <div className='w-full lg:w-[75%] aspect-video'>
                        <VideoPlayer src={currentEpisode.sources[0].url} />
                    </div>
                </div>
                <div className='w-full flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4 bg-[#202125] px-[20px] pt-[50px] rounded-sm'>
                    <div className='h-full lg:w-[80%] w-full flex flex-col space-y-4'>
                        <Comment
                            animeId={anime_info.id}
                            episodeId={episodeId}
                        />
                        <Recommend
                            data={anime_info?.recommendations}
                            props={{}}
                        />
                    </div>
                    <div className='lg:w-[20%]'>
                        <RelateAnime data={anime_info.relations} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watch

export const getServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    const { id, episode } = context.query

    if (!(id && episode)) {
        return { notFound: true }
    }

    const anime_info: AnimeInfo = await getAnimeInfo(id as string, 'zoro')

    const currentEpisode: EpisodeSource = await getAnimeEpisodeStreamingLink(
        anime_info.episodes[0].id,
    )
    return {
        props: {
            anime_info,
            currentEpisode,
            episodeId: episode,
        },
    }
}
