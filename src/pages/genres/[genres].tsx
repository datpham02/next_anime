import { useInfiniteQuery } from '@tanstack/react-query'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import React, { useMemo } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { InView } from 'react-intersection-observer'
import { Genres, Loading } from '~/components/UI'
import { getAnimeByGenres } from '~/utils/API'
import { AnimeSearch } from '~/utils/interface'

const genres = ({ genres }: { genres: string[] }) => {
    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isError,
    } = useInfiniteQuery({
        queryKey: [`genres-${genres[0]}`],
        queryFn: async ({ pageParam }) => {
            const result = await getAnimeByGenres(genres, pageParam, 18, 'zoro')
            return result
        },
        getNextPageParam: (lastPage) => {
            return lastPage.hasNextPage
                ? Number(lastPage.currentPage) + 1
                : null
        },
        onError: () => {
            toast.error('Something went wrong please f5 and try again')
        },
    })
    const animeData = useMemo(() => {
        return data?.pages.reduce((pre, cur) => {
            return [...pre, ...cur.results]
        }, [])
    }, [data])

    return (
        <div className='w-full h-full flex flex-col space-y-3 px-[20px] pt-[40px]'>
            <span className='text-[#2196F3] text-[30px] font-semibold'>
                {genres[0]}
            </span>
            {isLoading ? (
                <div className='w-full h-full flex items-center justify-center'>
                    <Loading />
                </div>
            ) : (
                <div className='flex flex-col space-y-6'>
                    <div className='grid 2xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4'>
                        {animeData?.map((anime_search: AnimeSearch) => {
                            return (
                                <Link
                                    key={anime_search.id}
                                    href={`/detail?id=${anime_search.id}`}
                                >
                                    <div className='w-full h-full rounded-md cursor-pointer'>
                                        <div className='h-[80%] relative flex items-center justify-center group'>
                                            <div className='after:anime-poster-bg'></div>
                                            <img
                                                className='w-full h-full object-cover'
                                                src={anime_search.image}
                                            />
                                            <div className='z-[-2] group-hover:z-[1] flex transition-all duration-200 ease-linear absolute top-0 left-0 bottom-0 right-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.4)]'>
                                                <BsFillPlayFill className='w-[50px] h-[50px] text-[#fff]' />
                                            </div>
                                        </div>
                                        <div className='h-[20%] flex flex-col space-y-1 bg-[#2a2c31] px-[8px] py-[10px]'>
                                            <span
                                                style={{
                                                    color: anime_search.color,
                                                }}
                                                className='text-[#fff] font-medium text-[14px] line-clamp-2'
                                            >
                                                {anime_search.title.romaji}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    <InView
                        fallbackInView
                        onChange={(InVidew) => {
                            if (InVidew && hasNextPage && !isFetchingNextPage) {
                                fetchNextPage()
                            }
                        }}
                    >
                        {({ ref }) => (
                            <div
                                ref={ref}
                                className='flex w-full py-[25px] items-center justify-center'
                            >
                                {isFetchingNextPage && (
                                    <AiOutlineLoading3Quarters
                                        color='#fff'
                                        className='animate-spin w-[40px] h-[40px]'
                                    />
                                )}
                            </div>
                        )}
                    </InView>
                </div>
            )}
        </div>
    )
}

export default genres

export const getServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    const { genres } = context.query

    if (!genres) {
        return { notFound: true }
    }

    return {
        props: {
            genres: [genres],
        },
    }
}
