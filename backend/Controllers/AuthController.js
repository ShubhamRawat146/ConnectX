const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../Models/Users');






const signup = async(req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await userModel.findOne({ email });
        if(user){
            return res.status(409).json({message: 'user already exist, you can login', success: false});
        }
        const usermodel = new userModel({ name, email, password});
        usermodel.password = await bcrypt.hash(password,10);
        await usermodel.save();
        return res.status(201).json({message: 'signup successfull', success: true});
    }catch(err) {
        return res.status(500).json({message: 'Internal server error', success: false});
    }
}

const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if(!user){
            return res.status(403).json({message: errorMsg, success: false});
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if(!isPassEqual){
            return req.status(403).json({message: errorMsg, success: false});
        }
        const jwtToken = jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )
        return res.status(200).json({
            message: 'login successfull', 
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    }catch(err) {
        return res.status(500).json({message: 'Internal server error', success: false});
    }
}

module.exports = {
    signup,
    login
}