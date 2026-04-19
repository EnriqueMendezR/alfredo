import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai('gpt-4o'),
    system: 'You are Alfredo, a helpful personal assistant.',
    messages,
  })

  return result.toDataStreamResponse()
}
