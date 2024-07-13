const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middleware/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation,login, (req, res) => {
    res.send('login success');
});

router.post('/signup', signupValidation,signup,(req, res) => {
    res.send('signup success');
});

module.exports = router;

