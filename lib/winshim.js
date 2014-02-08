var fs = require("fs");
var jsdom = require("jsdom").jsdom;

// Read in config here to find if a master template is set
var master = "templates/index.html";
var template = fs.readFileSync(master);

var w = global.document ? global : jsdom(template).parentWindow;
var $ = require("jquery")(w);

module.exports = w;

