const router = require('express').Router();
const { Lists, User } = require('../models');
const withAuth = require('../utils/auth');

// router for displaying the dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const listData = await Lists.findAll({
            where:{'user_id': req.session.user_id},
            include: User
        });
        const lists = listData.map((list) => list.get({ plain: true }));
        console.log(list);
        res.render('dashboard', {
            lists,
        });
    } catch (err) {
        res.redirect('login');
    }
});

// router for making a new list
router.get('/new', withAuth, (req, res) => {
    res.render('new-list',
    );
});

// router for editing a list
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const listData = await Lists.findByPk(req.params.id);
        if (listData) {
            const list = listData.get({ plain: true });
            console.log(list);
            res.render('edit-list', {
                layout: 'dashboard',
                list,
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