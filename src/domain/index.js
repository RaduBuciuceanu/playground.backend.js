import { getRecords } from 'domain/get-records'
import { createRecord } from 'domain/create-record'
import { deleteRecord } from 'domain/delete-record'

export * from 'domain/core/flow'

export const domain = {
  createRecord,
  getRecords,
  deleteRecord
}
