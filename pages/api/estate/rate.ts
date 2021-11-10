import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body;
  try {
    await prisma.estate.update({
      where: {
        id: data.estateId as string,
      },
      data: {
        totalRating: {
          increment: data.rating as number,
        },
        reviews: {
          increment: 1,
        },
      },
    });
    res.status(200).json({ message: "Ok" });
  } catch (e: any) {
    console.log(e.message);
  } finally {
  }
}
