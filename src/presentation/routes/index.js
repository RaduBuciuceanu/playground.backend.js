import { getRecords } from 'presentation/routes/get-records'
import { createRecord } from 'presentation/routes/create-record'
import { deleteRecord } from 'presentation/routes/delete-record'

const configure = server => {
  server.post('/api/record', createRecord)
  server.get('/api/records', getRecords)
  server.delete('/api/record', deleteRecord)
}

export const routes = { configure }
