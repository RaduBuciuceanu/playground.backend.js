import * as yup from 'yup'
import { Flow } from 'domain'
import { validate } from 'validations/core/validate'

const schema = yup.object().shape({
  ids: yup.array().of(yup.number())
}).required()

export const getRecords = () => Flow.ask()
  .map(context => context.parameter)
  .map(validate(schema))
  .chain(Flow.lift)
