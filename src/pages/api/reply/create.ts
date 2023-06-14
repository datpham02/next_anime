// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { content, userId, commentId } = req.body

            const reply = await prisma.comment.update({
                where: {
                    id: commentId,
                },
                data: {
                    reply: {
                        create: {
                            content: content,
                            userId: userId,
                        },
                    },
                },
            })

            if (reply) {
                return res.status(201).json({
                    message: 'Reply success !',
                    success: true,
                })
            } else {
                return res.status(204).json({
                    message: 'Reply failed !',
                    success: false,
                })
            }
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
