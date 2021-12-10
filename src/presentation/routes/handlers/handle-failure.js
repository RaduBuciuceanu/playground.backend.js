import { get } from 'lodash'
import { Flow } from 'domain'

const BACKUP_MESSAGE = 'Something wrong happened.'

const handleAccess = ({ response, error }) => response
  .status(401)
  .json(get(error, 'value', BACKUP_MESSAGE))

const handleValidation = ({ response, error }) => response
  .status(400)
  .json(get(error, 'value', BACKUP_MESSAGE))

const handleGeneric = ({ response }) => response
  .status(500)
  .json(BACKUP_MESSAGE)

export const handleFailure = response => error => {
  const parameter = { response, error }

  if (error.code === Flow.ERROR_CODE.accessDenied) return handleAccess(parameter)

  if (error.code === Flow.ERROR_CODE.invalidInput) return handleValidation(parameter)

  return handleGeneric(parameter)
}
