import { Flow } from 'domain'

const OPTIONS = Object.freeze({
  abortEarly: false,
  strict: true
})

export const validate = schema => Flow.tryCatch(value => schema.validateSync(value, OPTIONS))
