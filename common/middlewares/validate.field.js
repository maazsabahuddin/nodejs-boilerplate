

exports.hasRequiredFields = (req, res, next) => {
    let errors = [];

    if (req.body) {
        if (!req.body.email) {
            errors.push('Missing email field');
        }
        if (!req.body.password) {
            errors.push('Missing password field');
        }

        if (errors.length) {
            return res.status(400).send({errors: errors.join(',')});
        } else {
            return next();
        }
    } else {
        return res.status(400).send({errors: 'Missing email and password fields'});
    }
}

exports.get_response_object = (code, message, data) => {
    let response = {
        response_code: code,
        response_message: message
    }
    if (data) {
        response.response_data = data;
    }
    return response;
}