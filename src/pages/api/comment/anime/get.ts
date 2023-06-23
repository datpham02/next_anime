// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'GET') {
        try {
            const { animeId, episodeId } = req.query

            const comment = await prisma.comment.findMany({
                where: {
                    animeId: animeId as string,
                    episodeId: episodeId as string,
                },
                select: {
                    id: true,
                    user: {
                        select: {
                            id: true,
                            email: true,
                            name: true,
                            image: true,
                        },
                    },
                    content: true,
                    disLike: true,
                    like: true,
                    commentAt: true,
                    reply: {
                        select: {
                            user: {
                                select: {
                                    id: true,
                                    email: true,
                                    name: true,
                                    image: true,
                                },
                            },
                            content: true,
                            replyAt: true,
                            disLike: true,
                            like: true,
                        },
                    },
                },
            })

            if (comment) {
                return res.status(201).json({
                    comment: comment ?? [],
                    success: true,
                })
            }
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
