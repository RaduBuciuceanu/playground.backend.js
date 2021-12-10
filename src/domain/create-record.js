import Reader from 'crocks/Reader'

const validateAccess = () => Reader.ask()
  .chain(context => context.validateAccess())

const validateInput = () => Reader.ask()
  .chain(context => context.validateInput())

const store = () => Reader.ask()
  .chain(context => context.storeInput())

const notify = () => Reader.ask()
  .map(() => console.log("Done."))

export const createRecord = () => Reader.ask()
  .chain(validateAccess)
  .chain(validateInput)
  .chain(store)
  .chain(notify)
