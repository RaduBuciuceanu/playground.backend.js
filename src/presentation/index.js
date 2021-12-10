import { routes } from 'presentation/routes'
import { server } from 'presentation/server'

const LISTENING_PORT = 5000

const onStarted = () => console.log(`Listening at http://localhost:${LISTENING_PORT}.`)

const start = () => {
  const serverInstance = server.create()
  routes.configure(serverInstance)
  serverInstance.listen(LISTENING_PORT, onStarted)
}

export const presentation = { start }
