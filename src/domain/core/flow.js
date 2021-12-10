import Result from 'crocks/Result'
import ReaderT from 'crocks/Reader/ReaderT'
import tryCatch from 'crocks/Result/tryCatch'

export const Flow = ReaderT(Result)

Flow.Ok = Result.Ok
Flow.Err = Result.Err
Flow.tryCatch = tryCatch
