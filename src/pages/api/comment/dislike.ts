// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { commentId, userId } = req.body

            const like = await prisma.comment.findUnique({
                where: {
                    id: commentId,
                },
                select: {
                    like: {
                        where: {
                            userId: userId,
                        },
                    },
                },
            })
            if (like?.like[0]) {
                const disLike = await prisma.comment.update({
                    where: {
                        id: commentId,
                    },
                    data: {
                        disLike: {
                            create: {
                                userId: userId,
                            },
                        },
                        like: {
                            delete: {
                                id: like?.like[0].id,
                            },
                        },
                    },
                })
                if (disLike) {
                    return res.status(201).json({
                        message: 'DisLike success !',
                        success: true,
                    })
                } else {
                    return res.status(204).json({
                        message: 'DisLike failed !',
                        success: false,
                    })
                }
            }
            const disLike = await prisma.comment.update({
                where: {
                    id: commentId,
                },
                data: {
                    disLike: {
                        create: {
                            userId: userId,
                        },
                    },
                },
            })

            if (disLike) {
                return res.status(201).json({
                    message: 'DisLike success !',
                    success: true,
                })
            } else {
                return res.status(204).json({
                    message: 'DisLike failed !',
                    success: false,
                })
            }
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
