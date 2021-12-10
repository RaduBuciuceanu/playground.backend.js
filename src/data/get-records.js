import { Flow } from 'domain'

export const getRecords = () => Flow.ask()
  .map(context => context.parameter)
  .map(parameter => console.log(`Fetching the input...`, parameter))
