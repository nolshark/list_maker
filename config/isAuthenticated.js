// This middleware is for restricting the routes if a user is not logged in. 
module.exports = function(req, res, next) {
    if (req.user) {
      return next();
    }
    return res.redirect("/");
  };