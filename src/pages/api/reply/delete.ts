// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'DELETE') {
        try {
            const { commentId, replyId } = req.query

            const checkComment = await prisma.comment.findUnique({
                where: {
                    id: commentId as string,
                },
            })

            if (!checkComment) {
                return res
                    .status(400)
                    .json({ message: 'Comment does not exist !' })
            }

            const reply = await prisma.comment.update({
                where: {
                    id: commentId as string,
                },
                data: {
                    reply: {
                        delete: {
                            id: replyId as string,
                        },
                    },
                },
            })
            if (reply) {
                return res.status(201).json({
                    message: 'Delete comment success !',
                    success: true,
                })
            } else {
                return res.status(204).json({
                    message: 'Delete comment failed !',
                    success: false,
                })
            }
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
