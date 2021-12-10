import { Flow } from 'domain'

const failure = () => Flow.Err('Access denied.', Flow.ERROR_CODE.accessDenied)

const validate = Flow.ifElse(authToken => !!authToken, Flow.Ok, failure)

export const createRecord = () => Flow.ask()
  .map(context => context.authToken)
  .map(validate)
  .chain(Flow.lift)
