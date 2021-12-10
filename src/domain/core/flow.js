import Result from 'crocks/Result'
import ReaderT from 'crocks/Reader/ReaderT'

export const Flow = ReaderT(Result)

Flow.Ok = Result.Ok
Flow.Err = Result.Err
