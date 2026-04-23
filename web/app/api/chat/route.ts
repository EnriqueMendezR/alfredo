import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

const allowedOrigins = [process.env.EXTENSION_ORIGIN_DEV]

function getCorsHeaders(origin: string | null) {
  const allowed = allowedOrigins.includes(origin ?? '') ? origin! : ''
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get('origin')
  return new Response(null, { status: 204, headers: getCorsHeaders(origin) })
}

export async function POST(req: Request) {
  const origin = req.headers.get('origin')
  const corsHeaders = getCorsHeaders(origin)

  if (!corsHeaders['Access-Control-Allow-Origin']) {
    return new Response('Forbidden', { status: 403 })
  }

  const { messages } = await req.json()

  const result = streamText({
    model: openai('gpt-4o'),
    system: 'You are Alfredo, a helpful personal assistant.',
    messages,
  })

  return result.toDataStreamResponse({ headers: corsHeaders })
}
