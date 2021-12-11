import express from 'express'
import morgan from 'morgan'

const genericErrorHandler = (error, request, response, _next) => {
  response.status(500).json("Something wrong happened.")
}

const create = () => {
  const server = express()
  server.use(express.json())
  server.use(genericErrorHandler)
  server.use(morgan('dev'))

  return server
}

export const server = { create }
