const router = require('express').Router();
const { Lists, User } = require('../models');
const path = require('path');

router.get('/', async (req, res) => {
    res.redirect('/signup');
});

router.get('/signup', async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/signup.html"))
});

router.get('/login', async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"))
});

router.get('/home', async (req, res) => {
    res.render('index', {});
});

router.get('/new', async (req,res) => {
    res.sendFile(path.join(__dirname, "../public/newList.html"))
});

router.get('/friends', async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/friends.html"))
});

module.exports = router;