var bodyParser = require('body-parser');
var ect = require('ect');

var configExpress = function(app) {

  var renderer = ect({
    root: __dirname + 'views',
    ext: '.ect'
  });
  app.set('view engine', 'ect');
  app.engine('ect', renderer.render);
  app.set('views', './app/views');
  app.use(bodyParser.urlencoded({
    extended: true
  }));
}

module.exports = configExpress;
