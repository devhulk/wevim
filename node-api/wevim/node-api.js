let express = require('express')
let bodyParser = require('body-parser');
let cors = require('cors');

let modelRoutes = require('./routes/model-routes');

let appRoutes = require('./routes/app-routes');

let app = express();

app.use(bodyParser.json())
app.use(cors());

let router = express.Router();

// Mongo Connection URL
let mongoServer = 'localhost:27017'
let mongoUrl = `mongodb://${mongoServer}/wevim`
app.set('mongoUrl', mongoUrl);

app.set('port', process.env.PORT || 4000);

modelRoutes.getRoutes(app, router);

appRoutes.getRoutes(app, router);

app.use('/', router);

app.set('port', process.env.PORT || 4000);

// Start server
let server = app.listen(app.get('port'), function() {
  console.log('Express is running on port ' + app.get('port'));
});
