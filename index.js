var express = require("express")
  , app = express()
  , fs = require("fs")
  , index = fs.readFileSync("templates/index.html")
  , winshim = require("./lib/winshim")
  , $ = require("jquery")(winshim.window)
  html = $("html")
  ;

global.$ = $;

var Views = {
	Home: require("./app/views/Home")
};

app.use("/public", express.static(__dirname + '/public'));

app.use(function (req, res, next) {
	res.type("text/html");
	next();
});

app.get("/", function (req, res) {
	// fs.createReadStream("templates/index.html")
	// 	.pipe(res);
	var homeView = new Views.Home();
	html.find("body").html(new Views.Home().render().$el);
	res.send(html.html());
});

app.get("/about", function (req, res) {

});

app.listen(4000);