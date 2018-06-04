const express = require('express');
const bodyParser = require('body-parser');
const cc = require(__dirname + '/controllers/card_controller');
var cors = require('cors');

const app = express();

app.use( bodyParser.json() );
app.use(cors())

const messagesBaseUrl = "/api/cards";
app.post( messagesBaseUrl, cc.create );
app.get( messagesBaseUrl, cc.read );
app.put( `${messagesBaseUrl}/:id`, cc.update );
app.delete( `${messagesBaseUrl}/:id`, cc.delete );

const port = 3030;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );