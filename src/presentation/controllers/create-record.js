import { data } from 'data'
import { access } from 'access'
import { domain, Flow } from 'domain'
import { validations } from 'validations'

const makeContext = input => Object.freeze({
  validateAccess: access.createRecord,
  validateInput: validations.createRecord,
  storeInput: data.createRecord,
  input
})

export const createRecord = input => Flow.of()
  .chain(domain.createRecord)
  .runWith(makeContext(input))
