const ensureAuthentication = require('../Middleware/Auth')

const router = require('express').Router();

router.get('/', ensureAuthentication, (req, res) => {
    res.status(200).json([
        {
            name: "mobile",
            price: 1000
        },
        {
            name: "tv",
            price: 20000
        }
    ])
});

module.exports = router;