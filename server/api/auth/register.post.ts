import { sendError } from 'h3'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const { email, password, username, repeatPassword, name } = body

  if(!username || !email || !password || !repeatPassword || !name) { 
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Invalid request body',
    }))
  }
  
  return {
    body: body
  }
})