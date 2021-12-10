import Reader from 'crocks/Reader'

const validateAccess = () => Reader.ask()
  .map(context => context.input)
  .map(input => console.log(`Validating the access...`, input))

export const access = { validateAccess }
