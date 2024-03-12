import { API_URL } from "@/lib/constants";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.postId) {
    return new Response("Invalid post id.", {
      status: 400,
    });
  }

  const res = await fetch(API_URL + `/posts/${body.postId}/comments`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  });

  const comment = await res.json();

  return Response.json(comment);
}
