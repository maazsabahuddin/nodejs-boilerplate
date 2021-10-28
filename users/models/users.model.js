const mongoose = require('../../common/services/mongoose.service');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: String,
    email: String,
    phonenumber: String,
    password: String,
    password_salt: String,
    state: {id: Int16Array, name: String},
    gender: {id: Int16Array, name: String},
    display_picture: String,
    preferred_languaage: {id: Int16Array, name: String},
    created_at: {},
    updated_at: {}
})

userSchema.findById = function() {
    return this.model('Users').find({id: this.id});
}

const User = mongoose.model('Users', userSchema);

exports.findByEmail = (email) => {
    return User.find({email: email})
}

exports.findById = (id) => {
    return User.findById(id).then((result) => {
        return result.toJSON();
    })
}

exports.create_user = (data) => {
    return new User(data).save();
}