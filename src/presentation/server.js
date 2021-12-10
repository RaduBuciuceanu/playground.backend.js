import express from 'express'

const genericErrorHandler = (error, request, response, _next) => {
  response.status(500).json("Something wrong happened.")
}

const create = () => {
  const server = express()
  server.use(express.json())
  server.use(genericErrorHandler)

  return server
}

export const server = { create }
