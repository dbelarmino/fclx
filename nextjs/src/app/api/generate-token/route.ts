import { NextRequest, NextResponse } from "next/server";
import { encode } from "next-auth/jwt";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = {
    name: "admin",
    sub: body.user_id ?? "8615a8f5-59d2-4a7f-9abc-03709197c884",
  };

  const secret = process.env.NEXTAUTH_SECRET as string;

  const token = await encode({
    secret,
    token: user,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  return NextResponse.json({ token });
}