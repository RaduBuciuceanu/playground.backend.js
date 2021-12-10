import { controllers } from 'presentation/controllers'

export const getRecords = (request, response) => {
  const parameter = request.body?.parameter?.ids || []
  const created = controllers.getRecords(parameter)
  response.json(created)
}
