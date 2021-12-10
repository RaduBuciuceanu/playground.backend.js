import { Flow } from 'domain'

const OPTIONS = Object.freeze({
  abortEarly: false,
  strict: true
})

export const validate = schema => value => {
  try {
    return Flow.Ok(schema.validateSync(value, OPTIONS))
  } catch (error) {
    return Flow.Err(error, Flow.ERROR_CODE.invalidInput)
  }
}
