import Reader from 'crocks/Reader'

export const getRecords = () => Reader.ask()
  .map(context => context.parameter)
  .map(parameter => console.log(`Validating the input...`, parameter))
