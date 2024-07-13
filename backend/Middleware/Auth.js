const jwt = require('jsonwebtoken');

const ensureAuthentication = (req, res, next) =>{
    const auth = req.headers['authorisation'];
    if(!auth){
        return res.status(403).json({ message: 'Unauthorised, Jwt token is required'});
    }
    try{
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(403).json({message: 'unauthorised, jwt token wrong or expired'});
    }
}

module.exports = ensureAuthentication;