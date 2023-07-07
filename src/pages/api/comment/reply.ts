// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { content, animeId, episodeId, userId, parentCommentId } =
                req.body

            const comment = await prisma.comment.create({
                data: {
                    content,
                    userId,
                    episodeId,
                    animeId,
                    parentCommentId,
                },
            })

            if (comment) {
                return res.status(201).json({
                    message: 'Reply comment success !',
                    success: true,
                })
            } else {
                return res.status(204).json({
                    message: 'Reply comment failed !',
                    success: false,
                })
            }
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
