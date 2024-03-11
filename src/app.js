// Import express library
import express from 'express'

// Import config file
import { PORT } from './config.js'

// Initiate express instance
const app = express()

// Serve static files from public folder
// such as index.html and images
app.use(express.static('public'))

// Handler error for other url/path. Not found.
app.use('*', (_, res) => {
  res.status(404).send('Not found')
})

// Run express app
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})

export default app
