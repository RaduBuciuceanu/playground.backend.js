import Reader from 'crocks/Reader'

const validateAccess = () => Reader.ask()
  .chain(context => context.validateAccess())

const validateInput = () => Reader.ask()
  .chain(context => context.validateInput())

const fetchRecords = () => Reader.ask()
  .chain(context => context.fetchRecords())

const notify = () => Reader.ask()
  .map(() => console.log("Done."))

const result = () => Reader.ask()
  .map(context => context.parameter)

export const getRecords = () => Reader.ask()
  .chain(validateAccess)
  .chain(validateInput)
  .chain(fetchRecords)
  .chain(notify)
  .chain(result)
