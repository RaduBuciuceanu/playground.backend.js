import * as yup from 'yup'
import { Flow } from 'domain'

const schema = yup.object().shape({ record: yup.string().required('required') })

const validate = Flow.tryCatch(input => schema.validateSync(input, { abortEarly: false }))

export const createRecord = () => Flow.ask()
  .map(context => context.input)
  .map(validate)
  .chain(Flow.lift)
