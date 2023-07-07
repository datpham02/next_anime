// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { userId, animeId, name, image } = req.body
            const check = await prisma.watchList.findFirst({
                where: {
                    animeId: animeId,
                    userId: userId,
                },
            })

            if (check) {
                return res
                    .status(200)
                    .json({ message: 'Already exists in the watchlist !' })
            }
            const result = await prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    watchList: {
                        create: {
                            animeId,
                            name,
                            image,
                        },
                    },
                },
            })

            if (result) {
                return res.status(201).json({
                    message: 'Add watch list success !',
                    success: true,
                })
            } else
                return res.status(204).json({
                    message: 'Add watch list falied !',
                    success: false,
                })
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
