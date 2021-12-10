import { Flow } from 'domain'

const validateAccess = () => Flow.ask()
  .chain(context => context.validateAccess())

const validateInput = () => Flow.ask()
  .chain(context => context.validateInput())

const fetchRecords = () => Flow.ask()
  .chain(context => context.fetchRecords())

const notify = () => Flow.ask()
  .map(() => console.log("Done."))

const result = () => Flow.ask()
  .map(context => context.parameter)

export const getRecords = () => Flow.ask()
  .chain(validateAccess)
  .chain(validateInput)
  .chain(fetchRecords)
  .chain(notify)
  .chain(result)
