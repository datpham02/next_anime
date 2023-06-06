import baseAPI from './baseApi'

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

export const getPopularAnime = async (page: number = 1, perPage: number) => {
    const { data } = await baseAPI.get('/meta/anilist/popular', {
        params: {
            page: page,
            perPage: perPage,
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
