import { data } from 'data'
import { get } from 'lodash'
import { access } from 'access'
import { domain, Flow } from 'domain'
import { validations } from 'validations'

const makeContext = request => Object.freeze({
  validateAccess: access.deleteRecord,
  validateInput: validations.deleteRecord,
  deleteRecord: data.deleteRecord,
  input: get(request, 'body.input'),
  authToken: request.get('Authorization')
})

export const deleteRecord = request => Flow.of()
  .chain(domain.deleteRecord)
  .runWith(makeContext(request))
