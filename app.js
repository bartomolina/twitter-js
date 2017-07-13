const express = require( 'express' );
const volleyball = require( 'volleyball' );
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');
const app = express();


app.use(express.static('public'));
app.use(volleyball);
app.use('/', routes);

app.engine("html", nunjucks.render);
app.set("view engine", "html");
nunjucks.configure('views', { noCache: true });

var port = process.env.PORT || 3000;


app.listen (port, function() {
    console.log(`listening on port ${ port }`);
});
