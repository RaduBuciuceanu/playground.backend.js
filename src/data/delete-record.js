import { Flow } from 'domain'

export const deleteRecord = () => Flow.ask()
  .map(context => context.input)
  .map(input => console.log(`Deleting the record...`, input))
