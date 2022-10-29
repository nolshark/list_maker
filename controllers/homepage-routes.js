const router = require('express').Router();
const { Lists, User } = require('../models/');
const withAuth = require('../utils/auth');

// router for displaying the homepage after user has logged in
router.get('/', async (req, res) => {
    try {
        const listData = await Lists.findAll({
            include: User,
        });
        const lists = listData.map((list) => list.get({ plain: true }));
        res.render('homepage', { lists, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router for displaying a single list
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const listData = await Lists.findOne({
            where: {id: req.params.id},
            include: [User],
        });
        if (listData) {
            const list = listData.get({ plain: true });
            console.log(list);
            res.render('single-list', { layout: 'main', list, logged_in: req.session.loggedIn});
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// router for displaying the login screen
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

// router for displaying the signup screen
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');
});

router.get('/post', (req, res) => {
    Lists.findAll({
        attributes: ["list_id", "list_title"], 
        include: [
            {
                model: Lists, 
                attributes: [
                    "list_id", 
                    "list_title", 
                ]  
            }
        ], 
    })
        .then((listmaker_db) => res.json(listmaker_db))
        .catch ((err) => {
            console.log(err); 
        res.status(500).json(err);
    }); 
});  

module.exports = router; 