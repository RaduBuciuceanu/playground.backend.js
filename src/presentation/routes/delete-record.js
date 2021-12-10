import { controllers } from 'presentation/controllers'
import { handleFailure } from 'presentation/routes/handlers/handle-failure'
import { handleSuccess } from 'presentation/routes/handlers/handle-success'

export const deleteRecord = (request, response) => {
  const result = controllers.deleteRecord(request)

  result.either(handleFailure(response), handleSuccess(response))
}
