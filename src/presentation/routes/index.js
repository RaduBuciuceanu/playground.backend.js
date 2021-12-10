import { createRecord } from 'presentation/routes/create-record'
import { getRecords } from 'presentation/routes/get-records'

const configure = server => {
  server.post('/api/record/create', createRecord)
  server.get('/api/record/all', getRecords)
}

export const routes = { configure }
