import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const words = await getAllWords().catch((err) => {
    const result = {
      status: 500,
      body: err,
      message: "単語の取得に失敗しました"
    }
    console.error(result);
    throw result;
  });

  const result = {
    status: 200,
    data: words,
    message: "単語の取得に成功しました",
  }
  console.log(result);

  return NextResponse.json(words);
}

export async function POST(request: NextRequest) {
  const { id, japanese, portuguese, userId } = await request.json();

  const response = await prisma.word.create({
    data: {
      id: id,
      japanese: japanese,
      portuguese: portuguese,
      userId: userId
    },
  }).catch(err => {
    const result = {
      status: 500,
      body: err,
      message: "登録に失敗しました"
    }
    console.error(result);
    throw result;
  })

  const result = {
    status: 201,
    body: response,
    message: "登録に成功しました"
  }
  console.log(result);

  return NextResponse.json(result);
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')!;

  await prisma.word.delete({
    where: {
      id: id,
    },
  });

  const words = await getAllWords();
  return NextResponse.json(words);
}

export async function getAllWords() {
  const words = await prisma.word.findMany();
  return words;
}
