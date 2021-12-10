import { controllers } from 'presentation/controllers'
import { handleFailure } from 'presentation/routes/handlers/handle-failure'
import { handleSuccess } from 'presentation/routes/handlers/handle-success'

export const getRecords = (request, response) => {
  const result = controllers.getRecords(request)

  result.either(handleFailure(response), handleSuccess(response))
}
