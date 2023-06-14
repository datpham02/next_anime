// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'DELETE') {
        try {
            const { id } = req.query

            const comment = await prisma.comment.delete({
                where: {
                    id: id as string,
                },
            })

            if (comment) {
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
