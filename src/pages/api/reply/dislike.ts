// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { replyId, userId } = req.body

            const dislike = await prisma.reply.update({
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
