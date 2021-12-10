import { data } from 'data'
import { get } from 'lodash'
import { access } from 'access'
import { domain, Flow } from 'domain'
import { validations } from 'validations'

const makeContext = request => Object.freeze({
  validateAccess: access.createRecord,
  validateInput: validations.createRecord,
  storeInput: data.createRecord,
  input: get(request, 'body.input'),
  authToken: request.get('Authorization')
})

export const createRecord = request => Flow.of()
  .chain(domain.createRecord)
  .runWith(makeContext(request))
