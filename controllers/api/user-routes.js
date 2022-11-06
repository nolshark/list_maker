const router = require('express').Router();
const db = require('../../models');
const passport = require('../../config/passport')

router.get('/api', async (req, res) => {
    res.status(200) .json({message: "get all users"})
}); 

module.exports = function(app) {
    //login
    app.post('/api/login', passport.authenticate("local"), (req, res) => {
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });

    //signup
    app.post("/api/signup", (req, res) => {
        db.User.create({
          email: req.body.email,
          password: req.body.password
        })
          .then(() => {
            res.redirect(307, "/api/login");
          })
          .catch(err => {
            res.status(401).json(err);
          });
      });
};
    //try {
     //   const user = await User.findOne({
     //       where: {
      //          username: req.body.username,
      //      },
      //  });
      //  if(!user) {
      //      res.status(400).json({ message: 'Invalid username' });
       //     return;
      //  }
      //  const validPassword = user.checkPassword(req.body.password);
      //  if(!validPassword) {
       //     res.status(400).json({ message: 'Invalid password' });
       //     return;
      //  }
     //   req.session.save(() => {
       //     req.session.user_id = user.id;
       //     req.session.username = user.username;
       //     req.session.logged_in = true;

       //     res.json({ user, message: 'Login successful' });
      //  });
   // } catch (err) {
  ///      res.status(400).json({ message: 'Invalid username or password' })
   // }
//});

// logout
router.post('/logout', (req, res) => {
    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(400).end();
    }
});

module.exports = router