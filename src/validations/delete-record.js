import * as yup from 'yup'
import { Flow } from 'domain'
import { validate } from 'validations/core/validate'

const schema = yup.object().shape({
  id: yup.string().required('required'),
}).required()

export const deleteRecord = () => Flow.ask()
  .map(context => context.input)
  .map(validate(schema))
  .chain(Flow.lift)
