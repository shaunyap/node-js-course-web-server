  var middleware = {
    requireAuthentication: function (req, res, next) {
      console.log('private route reached.');
      next();
    },
    logger: function (req, res, next) {
      var date = new Date();
      console.log('Request at ' + date + ': '+ req.method + ': ' + req.originalUrl);
      next();
    }
  };

module.exports = middleware;
