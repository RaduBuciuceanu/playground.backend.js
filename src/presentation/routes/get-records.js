import { controllers } from 'presentation/controllers'
import { handleFailure } from 'presentation/routes/handlers/handle-failure'
import { handleSuccess } from 'presentation/routes/handlers/handle-success'

export const getRecords = (request, response) => {
  const parameter = request.body?.parameter?.ids || []
  const created = controllers.getRecords(parameter)

  created.either(handleFailure(response), handleSuccess(response))
}
