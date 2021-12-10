import { data } from 'data'
import { domain } from 'domain'
import { access } from 'access'
import Reader from 'crocks/Reader'
import { validations } from 'validations'

const makeContext = parameter => Object.freeze({
  validateAccess: access.getRecords,
  validateInput: validations.getRecords,
  fetchRecords: data.getRecords,
  parameter
})

export const getRecords = parameter => Reader.of()
  .chain(domain.getRecords)
  .runWith(makeContext(parameter))
