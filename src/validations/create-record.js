import * as yup from 'yup'
import { Flow } from 'domain'
import { validate } from 'validations/core/validate'

const schema = yup.object().shape({
  record: yup.string().required('required')
})

export const createRecord = () => Flow.ask()
  .map(context => context.input)
  .map(validate(schema))
  .chain(Flow.lift)
