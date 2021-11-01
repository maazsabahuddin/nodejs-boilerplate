const middleware = require("../users/middlewares/user.middleware");
const UserController = require("../users/controllers/user.controller");
const { body } = require('express-validator');
const UserModel = require("../users/models/users.model");

exports.routesConfig = function (app) {
    app.get('/users', [], function(req, res, next) {
        next();
    }, function (req, res) {
        res.send("Server is running fine.");
    })

    app.post('/users/create', 
        [
            middleware.hasRequiredFields,
            UserController.insert
        ]
    )
    
}
