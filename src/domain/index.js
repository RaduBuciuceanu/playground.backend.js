import { getRecords } from 'domain/get-records'
import { createRecord } from 'domain/create-record'

export * from 'domain/core/flow'

export const domain = {
  createRecord,
  getRecords,
}
