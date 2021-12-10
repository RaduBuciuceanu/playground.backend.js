import Reader from 'crocks/Reader'

export const createRecord = () => Reader.ask()
  .map(context => context.input)
  .map(input => console.log(`Storing the input...`, input))

