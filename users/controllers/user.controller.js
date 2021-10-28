

function get_random_salt() {
    return crypto.randomBytes(16).toString('base64');
}

function generate_password_hash(salt, passowrd) {
    return crypto.createHmac('sha512', salt).update(password).digest("base64");
}

exports.insert = (req, res) => {
    const data = req.body;
    let salt = get_random_salt();
    let hash = generate_password_hash(get_random_salt(), data.passowrd);
    data.passowrd = sakt + "$" + hash;
    
}