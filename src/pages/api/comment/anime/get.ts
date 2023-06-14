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
                            replytAt: true,
                            disLike: true,
                            like: true,
                        },
                    },
                },
            })

            if (comment) {
                return res.status(201).json({
                    comment: comment,
                    success: true,
                    message: 'Get comments success !',
                })
            } else {
                return res.status(204).json({
                    message: 'Get comments failed !',
                    success: false,
                })
            }
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
