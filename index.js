
const config = require("./common/config/env.config")
const express = require("express")
const app = express();

const UserRouter = require("./users/routes.config")

app.use(function (req, res, next){
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(express.json());
UserRouter.routesConfig(app);

app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});