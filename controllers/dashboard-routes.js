const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// router for displaying the dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where:{'user_id': req.session.user_id},
            include: User
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
        res.render('dashboard', {
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

// router for making a new post
router.get('/new', withAuth, (req, res) => {
    res.render('new-post',
    );
});

// router for editing a post
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        if (postData) {
            const post = postData.get({ plain: true });
            console.log(post);
            res.render('edit-post', {
                layout: 'dashboard',
                post,
            });
        } else { 
            res.status(400).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

// export routes
module.exports = router