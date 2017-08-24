let express = require('express')
let app = express()

app.use('/', express.static('app'))

app.listen(3000, () => {
  console.log('running on port 3000')
})
