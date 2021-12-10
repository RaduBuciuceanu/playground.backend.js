import { controllers } from 'presentation/controllers'
import { handleFailure } from 'presentation/routes/handlers/handle-failure'
import { handleSuccess } from 'presentation/routes/handlers/handle-success'

export const createRecord = (request, response) => {
  const input = request.body?.record
  const created = controllers.createRecord(input)

  created.either(handleFailure(response), handleSuccess(response))
}
