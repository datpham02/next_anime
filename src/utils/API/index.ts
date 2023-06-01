import baseAPI from './baseApi'

export const getTredingAnime = async (page: number, perPage: number) => {
    const { data } = await baseAPI.get('/meta/anilist/trending', {
        params: {
            page: page,
            perPage: perPage,
        },
    })

    return data
}

export const getAnimeInfo = async (id: string, provider: string) => {
    const { data } = await baseAPI.get(`/meta/anilist/info/${id}`, {
        params: {
            provider: provider,
        },
    })

    return data
}
