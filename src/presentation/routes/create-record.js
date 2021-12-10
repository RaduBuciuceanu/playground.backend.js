import { controllers } from 'presentation/controllers'

export const createRecord = (request, response) => {
  const created = controllers.createRecord(request.body?.record)
  response.json(created)
}
