// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            const { userId } = req.body
            const result = await prisma.watchList.findMany({
                where: {
                    userId: userId,
                },
            })

            if (result) {
                return res.status(201).json({ watch_list: result })
            } else return res.status(204).json({ message: 'Do not found' })
        } catch (err) {
            return res.status(500).json('Server not found!')
        }
    }
}

export default handler
