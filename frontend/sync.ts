import http from 'http'
import fs from 'fs'

http.get('http://rails:3000/camille/endpoints.ts', response => {
  if (response.statusCode === 200) {
    response.pipe(fs.createWriteStream('src/endpoints.ts'))
  } else {
    console.log(`Sync failed: ${response.statusCode} ${response.statusMessage}`)
  }
})
