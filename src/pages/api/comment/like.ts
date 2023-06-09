// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { commentId, userId } = req.body

            const dislike = await prisma.comment.findUnique({
                where: {
                    id: commentId,
                },
                select: {
                    disLike: {
                        where: {
                            userId: userId,
                        },
                    },
                },
            })
            if (dislike?.disLike[0]) {
                const like = await prisma.comment.update({
                    where: {
                        id: commentId,
                    },
                    data: {
                        like: {
                            create: {
                                userId: userId,
                            },
                        },
                        disLike: {
                            delete: {
                                id: dislike?.disLike[0].id,
                            },
                        },
                    },
                })
                if (like) {
                    return res.status(201).json({
                        message: 'Like success !',
                        success: true,
                    })
                } else {
                    return res.status(204).json({
                        message: 'Like failed !',
                        success: false,
                    })
                }
            }
            const like = await prisma.comment.update({
                where: {
                    id: commentId,
                },
                data: {
                    like: {
                        create: {
                            userId: userId,
                        },
                    },
                },
            })

            if (like) {
                return res.status(201).json({
                    message: 'Like success !',
                    success: true,
                })
            } else {
                return res.status(204).json({
                    message: 'Like failed !',
                    success: false,
                })
            }
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
