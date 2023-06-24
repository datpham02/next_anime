// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { replyId, userId } = req.body

            const [like, dislike] = await Promise.all([
                prisma.reply.findUnique({
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
                }),
                prisma.reply.findUnique({
                    where: {
                        id: replyId,
                    },
                    select: {
                        disLike: {
                            where: {
                                userId: userId,
                            },
                        },
                    },
                }),
            ])

            if (like?.like[0].id) {
                const cancel = await prisma.reply.update({
                    where: {
                        id: replyId,
                    },
                    data: {
                        like: {
                            delete: {
                                id: like?.like[0].id,
                            },
                        },
                    },
                })
                if (cancel)
                    return res.json({
                        message: 'Cancel success !',
                        success: true,
                    })
                return res.json({ message: 'Cancel failed !', success: false })
            }
            if (dislike?.disLike[0].id) {
                const cancel = await prisma.reply.update({
                    where: {
                        id: replyId,
                    },
                    data: {
                        disLike: {
                            delete: {
                                id: dislike?.disLike[0].id,
                            },
                        },
                    },
                })
                if (cancel)
                    return res.json({
                        message: 'Cancel success !',
                        success: true,
                    })
                return res.json({ message: 'Cancel failed !', success: false })
            }
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
