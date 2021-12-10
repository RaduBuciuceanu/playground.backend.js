import Result from 'crocks/Result'
import ifElse from 'crocks/logic/ifElse'
import ReaderT from 'crocks/Reader/ReaderT'
import tryCatch from 'crocks/Result/tryCatch'

export const Flow = ReaderT(Result)

Flow.Ok = Result.Ok
Flow.Err = (value, code = Flow.ERROR_CODE.generic) => Result.Err({ code, value })
Flow.tryCatch = tryCatch
Flow.ifElse = ifElse

Flow.ERROR_CODE = Object.freeze({
  generic: 'GENERIC_ERROR',
  accessDenied: 'ACCESS_DENIED_ERROR',
  invalidInput: 'INVALID_INPUT_ERROR'
})
