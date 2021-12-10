import { Flow } from 'domain'

export const getRecords = () => Flow.ask()
  .map(context => context.parameter)
  .map(parameter => console.log(`Validating the input...`, parameter))
