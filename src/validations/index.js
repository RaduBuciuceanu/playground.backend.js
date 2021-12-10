import Reader from 'crocks/Reader'

const validateInput = () => Reader.ask()
  .map(context => context.input)
  .map(input => console.log(`Validating the input...`, input))

export const validations = {
  validateInput
}
