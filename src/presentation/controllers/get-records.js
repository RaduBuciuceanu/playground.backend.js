import { data } from 'data'
import { get } from 'lodash'
import { access } from 'access'
import { domain, Flow } from 'domain'
import { validations } from 'validations'

const makeContext = request => Object.freeze({
  validateAccess: access.getRecords,
  validateInput: validations.getRecords,
  fetchRecords: data.getRecords,
  parameter: get(request, 'body.parameter', {})
})

export const getRecords = request => Flow.of()
  .chain(domain.getRecords)
  .runWith(makeContext(request))
