// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { commentId, userId } = req.body

            const dislike = await prisma.comment.update({
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

            if (dislike) {
                return res.status(201).json({
                    message: 'Dislike success !',
                    success: true,
                })
            } else {
                return res.status(204).json({
                    message: 'Dislike failed !',
                    success: false,
                })
            }
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
