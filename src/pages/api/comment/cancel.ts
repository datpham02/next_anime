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

            if (like) {
                const cancel = await prisma.comment.update({
                    where: {
                        id: commentId,
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
            if (dislike) {
                const cancel = await prisma.comment.update({
                    where: {
                        id: commentId,
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
