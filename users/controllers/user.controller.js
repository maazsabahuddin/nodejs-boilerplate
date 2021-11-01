const UserModel = require("../models/users.model");
const middleware = require("../../common/middlewares/validate.field");
const crypto = require('crypto');

function get_random_salt() {
    return crypto.randomBytes(16).toString('base64');
}

function generate_password_hash(salt, password) {
    return crypto.createHmac('sha512', salt).update(password).digest("base64");
}

exports.insert = async (req, res) => {

    const user = await UserModel.findByEmail(req.body.email);
    if (user.length > 0){
        const response = middleware.get_response_object(200, "Email address already in use.")
        return res.json(response);
    }
        
    const salt = get_random_salt();
    const hash = generate_password_hash(salt, req.body.password);
    req.body.password = salt + "$" + hash;
    UserModel.create_user(req.body).then((user) => {
        const response = middleware.get_response_object(200, "Success.", user);
        return res.json(response);
    });

}
