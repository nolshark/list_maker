const router = require('express').Router();
const { Lists, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
       const listData = await Lists.findAll(); 
        console.log(Data); 
        const lists = listData.get({plain: true}); 
        res.status(200).json(lists); 
    }
    catch (err) {
        res.status(500).json(err.message); 
    }
});

// create
router.post('/', withAuth, async (req, res) => {
        console.log(req.body);
    try {
        const newList = await Lists.create({ ...req.body, user_id: req.session.user_id });
        console.log(newList);
        res.json(newList);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// update
router.put('/:id', withAuth, async (req, res) => {
   try {
        console.log(req.body);
        const [affectedRows] = await Lists.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = Lists.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;