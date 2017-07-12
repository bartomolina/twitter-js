const express = require( 'express' );
const volleyball = require( 'volleyball' );
const nunjucks = require( 'nunjucks' );
const app = express();


app.use(volleyball);

app.engine("html", nunjucks.render);
app.set("view engine", "html");
nunjucks.configure('views', { noCache: true });

var port = process.env.PORT || 3000;

// app.use(function(req, res, next) {
//     console.log(req.method, req.url);
//     next();
// });

// app.use("/news", function(req, res, next) {
//     console.log("you've reached news");
//     next();
// });

app.listen (port, function() {
    console.log(`listening on port ${ port }`);
});

app.get("/", function(request, response, next){
    response.render('index', { title: "An Example", people: [{name: "Gandal"}, {name: "Frodo"}, {name: "Hermione"}] })
    // var res = nunjucks.render('index.html', { title: "An Example", people: [{name: "Gandal"}, {name: "Frodo"}, {name: "Hermione"}] });
    response.send(res);
});

app.get("/news", function(request, response, next){
    response.send("news");
});
