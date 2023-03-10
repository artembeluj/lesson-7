const bcrypt = require("bcryptjs")

const {User} = require("../../models/user")

const {RequestError} = require("../../helpers")

const login = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        throw RequestError(401, "Email or password wrong")
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) {
        throw RequestError(401, "Email or password wrong")
    }

    const token = "!hjhfjkkfhj.334vhjk.dsdw"

    res.json({
        token
    })
}

module.exports = login;