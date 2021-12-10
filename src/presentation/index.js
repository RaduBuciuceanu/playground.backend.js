import { data } from 'data'
import { access } from 'access'
import { domain } from 'domain'
import Reader from 'crocks/Reader'
import { validations } from 'validations'

const makeContext = input => Object.freeze({
  validateAccess: access.validateAccess,
  validateInput: validations.validateInput,
  storeInput: data.storeInput,
  input
})

const start = input => Reader.of()
  .chain(domain.execute)
  .runWith(makeContext(input))


export const presentation = { start }
