export interface Children {
    children: React.ReactNode
}
export interface EpisodeProps {
    type: number
    episode: number
    episode_name: string
    watching: boolean
}
export interface RecommendProps {
    data: []
    props: React.HTMLAttributes<HTMLDivElement>
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
    title: Title2
    status: string
    episodes: number
    image: string
    cover: string
    rating: number
    type: string
}

export interface Title2 {
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
    name: Name2
    image: string
}

export interface Name2 {
    first: string
    last?: string
    full: string
    native?: string
    userPreferred: string
}

export interface Relation {
    id: number
    relationType: string
    malId: number
    title: Title3
    status: string
    episodes?: number
    image: string
    color?: string
    type: string
    cover: string
    rating?: number
}

export interface Title3 {
    romaji: string
    english?: string
    native: string
    userPreferred: string
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
