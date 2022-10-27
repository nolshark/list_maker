const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const passport = require('./config/passport');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models')

//Sets Handlebars as the templating engine
//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');

// intialize express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// initialize passport
app.use(
  session({secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

//require('./routes/html-routes.js')(app);
//require('./routes/api-routes.js')(app);
//require('./routes/post-api-routes.js')(app);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

