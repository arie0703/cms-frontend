import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.body.prompt;
  console.log(prompt);

  if (!prompt) return res.status(500).json({ data: 'プロンプトが正しく読み込めませんでした' });

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}],
  });

  const message = completion.choices[0].message.content;

  const response = {
    status: 200,
    message: message
  }


  res.status(200).json(response);
}
