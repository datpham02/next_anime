/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's4.anilist.co',
                port: '',
                pathname: '/file/anilistcdn/media/anime/cover/large/**',
            },
        ],
    },
}

module.exports = nextConfig
