import Reader from 'crocks/Reader'

const storeInput = () => Reader.ask()
  .map(context => context.input)
  .map(input => console.log(`Storing the input...`, input))

export const data = { storeInput }
