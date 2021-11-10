import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { Estate } from ".prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Estate | null>
) {
  const { id } = req.query;

  try {
    if (id !== "undefined") {
      const estate = await prisma.estate.findUnique({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(estate);
    }
    res.status(200).end();
  } catch (e: any) {
    console.log(e.message);
    res.status(500).end();
  } finally {
  }
}
