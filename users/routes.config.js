const config = require("../common/config/env.config");

exports.routesConfig = function (app) {
    app.get('/users', [], function(req, res, next) {
        next();
    }, function (req, res) {
        res.send("HELLO WORLD");
    })

    app.post('/user/:userId/book/:bookId', function(req, res) {
        // res.status(201).send({id: '1231231231'});
        console.log(req.params.userId);
        console.log(req.params.bookId);
        res.send(req.params)
    })
}
