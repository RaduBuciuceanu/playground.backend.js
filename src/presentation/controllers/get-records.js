import { data } from 'data'
import { access } from 'access'
import { domain, Flow } from 'domain'
import { validations } from 'validations'

const makeContext = parameter => Object.freeze({
  validateAccess: access.getRecords,
  validateInput: validations.getRecords,
  fetchRecords: data.getRecords,
  parameter
})

export const getRecords = parameter => Flow.of()
  .chain(domain.getRecords)
  .runWith(makeContext(parameter))
