import { Flow } from 'domain'

const validateAccess = () => Flow.ask()
  .chain(context => context.validateAccess())

const validateInput = () => Flow.ask()
  .chain(context => context.validateInput())

const removeFromDatabase = () => Flow.ask()
  .chain(context => context.deleteRecord())

const notify = () => Flow.ask()
  .map(() => console.log("Done."))

const result = () => Flow.ask()
  .map(context => context.input)

export const deleteRecord = () => Flow.ask()
  .chain(validateAccess)
  .chain(validateInput)
  .chain(removeFromDatabase)
  .chain(notify)
  .chain(result)
