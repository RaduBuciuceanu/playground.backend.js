import { controllers } from 'presentation/controllers'

const start = () => {
  controllers.createRecord("Hello")
}

export const presentation = { start }
