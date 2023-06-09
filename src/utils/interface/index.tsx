import { CSSProperties, MouseEventHandler } from 'react'

export interface Children {
    children: React.ReactNode
}
export interface CommentProps {
    animeId: string
    episodeId: string
}
export interface RecommendProps {
    data: Recommendation[]
    props: React.HTMLAttributes<HTMLDivElement>
}
export interface UseDebounce {
    value: string
    delay: number
}
export interface TrendingAnime {
    id: string
    malId: number
    title: TitleType2
    image: string
    trailer: Trailer
    description: string
    status: string
    cover: string
    rating: number
    releaseDate: number
    color: string
    genres: string[]
    totalEpisodes: number
    duration: number
    type: string
}

export interface TitleType2 {
    romaji: string
    english: string
    native: string
    userPreferred: string
}

export interface Trailer {
    id: string
    site: string
    thumbnail: string
}

export interface AnimeInfo {
    id: string
    title: TitleType1
    malId: number
    synonyms: string[]
    isLicensed: boolean
    isAdult: boolean
    countryOfOrigin: string
    trailer: Trailer
    image: string
    popularity: number
    color: string
    cover: string
    description: string
    status: string
    releaseDate: number
    startDate: StartDate
    endDate: EndDate
    totalEpisodes: number
    currentEpisode: number
    rating: number
    duration: number
    genres: string[]
    season: string
    studios: string[]
    subOrDub: string
    type: string
    recommendations: Recommendation[]
    characters: Character[]
    relations: Relation[]
    mappings: Mappings
    episodes: Episode[]
}

export interface TitleType1 {
    romaji: string
    english: string
    native: string
}

export interface StartDate {
    year: number
    month: number
    day: number
}

export interface EndDate {
    year: number
    month: number
    day: number
}

export interface Recommendation {
    id: number
    malId: number
    title: TitleType2
    status: string
    episodes: number
    image: string
    cover: string
    rating: number
    type: string
}

export interface TitleType2 {
    romaji: string
    english: string
    native: string
    userPreferred: string
}

export interface Character {
    id: number
    role: string
    name: Name
    image: string
    voiceActors: VoiceActor[]
}

export interface Name {
    first: string
    last: string
    full: string
    native: string
    userPreferred: string
}

export interface VoiceActor {
    id: number
    language: string
    name: Name
    image: string
}

export interface Relation {
    id: number
    relationType: string
    malId: number
    title: TitleType2
    status: string
    episodes?: number
    image: string
    color?: string
    type: string
    cover: string
    rating?: number
}

export interface Mappings {
    mal: number
    anidb: number
    kitsu: number
    anilist: number
    thetvdb: number
    anisearch: number
    livechart: number
    'notify.moe': string
    'anime-planet': string
}

export interface Episode {
    id: string
    title: string
    description: string
    number: number
    image: string
    airDate: string
}

export interface RecentAnime {
    id: string
    malId: number
    title: TitleType2
    image: string
    rating: number
    color: string
    episodeId: string
    episodeTitle: string
    episodeNumber: number
    genres: string[]
    type: string
}

export interface AiringAnime {
    id: string
    malId: any
    episode: number
    airingAt: number
    title: TitleType2
    country: string
    image: string
    description: string
    cover: string
    genres: string[]
    color: string
    rating: any
    releaseDate: any
    type: string
}

export interface PopularAnime {
    id: string
    malId: number
    title: TitleType2
    image: string
    trailer: Trailer
    description: string
    status: string
    cover: string
    rating: number
    releaseDate: number
    color: string
    genres: string[]
    totalEpisodes: number
    duration: number
    type: string
}

export interface AnimeSearch {
    id: string
    malId: number
    title: TitleType2
    status: string
    image: string
    cover: string
    popularity: number
    totalEpisodes: number
    currentEpisode: any
    countryOfOrigin: string
    description: string
    genres: string[]
    rating: number
    color: string
    type: string
    releaseDate: number
}

export interface EpisodeSource {
    sources: Source[]
    subtitles: Subtitle[]
    intro: Intro
}

export interface Source {
    url: string
    quality: string
    isM3U8: boolean
}

export interface Subtitle {
    url: string
    lang: string
}

export interface Intro {
    start: number
    end: number
}

export interface Comment {
    id: string
    episodeId: string
    animeId: string
    content: string
    commentAt: string
    userId: string
    parentCommentId: string
    parentComment: ParentComment
    user: User
    disLike: DisLike[]
    like: Like[]
    replies: Reply[]
}

export interface ParentComment {
    user: User
}
export interface User {
    id: string
    email: string
    name: string
    image: string
}

export interface Reply {
    id: string
    episodeId: string
    animeId: string
    content: string
    commentAt: string
    userId: string
    parentCommentId: string
    user: User
    disLike: any[]
    like: any[]
}

export interface InputCommentProps {
    episodeId: string
    animeId: string
}
export interface InputReplyProps {
    userId: string
    animeId: string
    episodeId: string
    parentCommentId: string
}

export interface Like {
    id: string
    commentId: string
    userId: string
}

export interface DisLike {
    id: string
    commentId: string
    userId: string
}
export interface LikeComponentProps {
    isLike: Boolean

    handleLike: any
    handleCancel: any
    count: number
}
export interface DisLikeComponentProps {
    isDisLike: Boolean

    handleDisLike: any
    handleCancel: any
    count: number
}
export interface ArrowProps {
    className?: string
    style?: CSSProperties
    onClick?: MouseEventHandler
}
export interface WatchList {
    id: string
    animeId: string
    name: string
    image: string
    userId: string
}
