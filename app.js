const express = require( 'express' );
const volleyball = require( 'volleyball' );
const app = express();

var port = process.env.PORT || 3000;

console.log("start");

app.use(volleyball);

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
    response.send("hello");
});

app.get("/news", function(request, response, next){
    response.send("news");
});
