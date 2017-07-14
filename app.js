const bodyParser = require('body-parser');
const express = require( 'express' );
const volleyball = require( 'volleyball' );
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');
const socketio = require('socket.io');

const app = express();
var port = process.env.PORT || 3000;
const server = app.listen(port);
const io = socketio.listen(server);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(volleyball);
app.use('/', routes(io));

app.engine("html", nunjucks.render);
app.set("view engine", "html");
nunjucks.configure('views', { noCache: true });

// console.log(`listening on (socketio) port ${port}`);

// app.listen (port, function() {
//     console.log(`listening on port ${ port }`);
// });
