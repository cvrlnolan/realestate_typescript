import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const estateData = req.body;

  try {
    await prisma.estate.create({
      data: estateData,
    });
    res.status(200).json({ message: "Ok" });
  } catch (e: any) {
    console.log(e.message);
    res.status(500).end();
  } finally {
  }
}
