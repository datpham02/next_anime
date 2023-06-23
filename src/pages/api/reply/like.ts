// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { replyId, userId } = req.body

            const like = await prisma.reply.update({
                where: {
                    id: replyId,
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
