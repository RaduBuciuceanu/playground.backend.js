import { createRecord } from 'presentation/routes/create-record'

const configure = server => {
  server.post('/api/record/create', createRecord)
}

export const routes = { configure }
