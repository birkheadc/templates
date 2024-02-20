import { NextApiRequest } from "next";

export async function POST(request: NextApiRequest): Promise<Response> {
  const url = process.env.BACKEND_URL;

  // Todo: proxy request to actual backend
  return Response.json({value: 'token'})
}