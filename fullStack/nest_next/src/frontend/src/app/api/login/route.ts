import { NextApiRequest } from "next";

export async function POST(request: NextApiRequest): Promise<Response> {
  const url = process.env.BACKEND_URL;

  return Response.json({url})
}