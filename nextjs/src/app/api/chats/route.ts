import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json()

  // cria o chat e cria a message juntos
  const chatCreated = await prisma.chat.create({
    data: {
      messages: {
        create: {
          content: body.message
        }
      }
    },
    select: {
      id: true,
      messages: true
    }
  })

  return NextResponse.json(chatCreated)
}

export async function GET(request: NextRequest) {
  const chats = await prisma.chat.findMany({
    select: {
      id: true,
      messages: {
        orderBy: {
          created_at: 'asc',
        },
        take: 1
      }
    },
    orderBy: {
      created_at: "desc"
    }
  })

  return NextResponse.json(chats)
}