const express = require('express');
const bodyParser = require('body-parser');
const cc = require(__dirname + '/controllers/card_controller');
var cors = require('cors');

const app = express();

app.use( bodyParser.json() );
app.use(cors())

const apiBaseUrl = "/api/cards";
app.post( apiBaseUrl, cc.create );
app.get( apiBaseUrl, cc.read );
app.put( `${apiBaseUrl}/:id`, cc.update );
app.delete( `${apiBaseUrl}/:cardId`, cc.delete );

const port = 3030;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );