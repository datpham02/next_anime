// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { userId, animeId } = req.body
            const result = await prisma.watchList.findFirst({
                where: {
                    animeId: animeId,
                    userId: userId,
                },
            })

            if (result) {
                return res
                    .status(201)
                    .json({ message: 'Followed', followed: true })
            } else
                return res
                    .status(204)
                    .json({ message: 'Did not followed', followed: false })
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
