let express = require('express')
let app = express()
app.use(express.static(__dirname));

app.get('/', (req,res) => {
  res.sendFile('index.html')

})

app.listen('3000', () => {
  console.log('listening on port 3000')
})
