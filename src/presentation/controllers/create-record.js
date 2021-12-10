import { data } from 'data'
import { domain } from 'domain'
import { access } from 'access'
import Reader from 'crocks/Reader'
import { validations } from 'validations'

const makeContext = input => Object.freeze({
  validateAccess: access.createRecord,
  validateInput: validations.createRecord,
  storeInput: data.createRecord,
  input
})

export const createRecord = input => Reader.of()
  .chain(domain.createRecord)
  .runWith(makeContext(input))
