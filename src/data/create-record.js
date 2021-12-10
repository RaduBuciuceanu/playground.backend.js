import { Flow } from 'domain'

export const createRecord = () => Flow.ask()
  .map(context => context.input)
  .map(input => console.log(`Storing the input...`, input))
