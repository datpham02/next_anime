// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { replyId, userId } = req.body

            const like = await prisma.reply.findUnique({
                where: {
                    id: replyId,
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
                const disLike = await prisma.reply.update({
                    where: {
                        id: replyId,
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
            const disLike = await prisma.reply.update({
                where: {
                    id: replyId,
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
