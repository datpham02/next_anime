import axios from 'axios'
import baseAPI from './baseApi'
import { convertQueryArrayParams } from '../function'

export const getTredingAnime = async (page: number = 1, perPage: number) => {
    const { data } = await baseAPI.get('/meta/anilist/trending', {
        params: {
            page: page,
            perPage: perPage,
        },
    })

    return data
}

export const getAnimeInfo = async (id: string, provider: string = 'zoro') => {
    const { data } = await baseAPI.get(`/meta/anilist/info/${id}`, {
        params: {
            provider: provider,
        },
    })

    return data
}

export const getRecentAnime = async (
    page: number,
    perPage: number,
    provider: string,
) => {
    const { data } = await baseAPI.get('/meta/anilist/recent-episodes', {
        params: {
            page: page,
            perPage: perPage,
            provider: provider,
        },
    })

    return data
}

export const getAiringAnime = async (page: number = 1, perPage: number) => {
    const { data } = await baseAPI.get('/meta/anilist/airing-schedule', {
        params: {
            page: page,
            perPage: perPage,
        },
    })

    return data
}

export const getPopularAnime = async (page: number = 1, perPage: number,provider : string) => {
    const { data } = await baseAPI.get('/meta/anilist/popular', {
        params: {
            page: page,
            perPage: perPage,
            provider : provider
        },
    })

    return data
}

export const searchAnime = async (
    query: String,
    page: number = 1,
    perPage: number = 5,
) => {
    const { data } = await baseAPI.get(`meta/anilist/advanced-search`, {
        params: {
            query: query,
            page: page,
            perPage: perPage,
        },
    })
    return data
}
export const getAnimeByGenres = async (
    genres: string[],
    page: number = 1,
    perPage: number = 20,
    provider: string,
) => {
    const { data } = await baseAPI.get('/meta/anilist/advanced-search', {
        params: {
            genres: convertQueryArrayParams(genres),
            page: page,
            perPage: perPage,
            provider: provider,
        },
    })
    return data
}

export const getAnimeEpisodeStreamingLink = async (
    episodeId: string,
    provider: string = 'zoro',
) => {
    const { data } = await baseAPI.get(`/meta/anilist/watch/${episodeId}`, {
        params: {
            provider: provider,
        },
    })

    return data
}

export const addWatchList = async (
    userId: string,
    animeId: string,
    name: string,
    image: string,
) => {
    const { data } = await axios.post('/api/watch_list/add', {
        userId,
        animeId,
        name,
        image,
    })

    return data
}

export const removeWatchList = async (userId: string, animeId: string) => {
    const { data } = await axios.post('/api/watch_list/remove', {
        userId,
        animeId,
    })

    return data
}

export const getAnimeWatchListStatus = async (
    userId: string,
    animeId: string,
) => {
    const { data } = await axios.post('/api/watch_list/user/anime/status', {
        userId,
        animeId,
    })

    return data
}

export const getUserWatchList = async (userId: string) => {
    const { data } = await axios.post('/api/watch_list/user/get', {
        userId,
    })

    return data
}

export const CreateComment = async (
    content: string,
    userId: string,
    episodeId: string,
    animeId: string,
) => {
    const { data } = await axios.post('/api/comment/create', {
        content: content,
        userId: userId,
        episodeId: episodeId,
        animeId: animeId,
    })

    return data
}

export const CreateReply = async (
    userId: string,
    content: string,
    animeId: string,
    episodeId: string,
    parentCommentId: string,
) => {
    const { data } = await axios.post('/api/comment/reply', {
        userId: userId,
        content: content,
        animeId: animeId,
        episodeId: episodeId,
        parentCommentId: parentCommentId,
    })

    return data
}

export const DeleteComment = async (id: string) => {
    const { data } = await axios.post(`/api/comment/delete?id=${id}`)

    return data
}

export const GetComments = async (animeId: string, episodeId: string) => {
    const { data } = await axios.get(
        `/api/comment/anime/get?animeId=${animeId}&episodeId=${episodeId}`,
    )

    return data.comment
}

export const LikeComment = async (commentId: string, userId: string) => {
    const { data } = await axios.post('/api/comment/like', {
        commentId: commentId,
        userId: userId,
    })
    return data
}

export const DisLikeComment = async (commentId: string, userId: string) => {
    const { data } = await axios.post('/api/comment/dislike', {
        commentId: commentId,
        userId: userId,
    })
    return data
}

export const CancelLikeDisLikeComment = async (
    commentId: string,
    userId: string,
) => {
    const { data } = await axios.post('/api/comment/cancel', {
        commentId: commentId,
        userId: userId,
    })

    return data
}
