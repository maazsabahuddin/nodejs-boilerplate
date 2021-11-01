const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: String,
    email: String,
    phonenumber: String,
    password: String,
    password_salt: String,
    state: {id: Number, name: String},
    gender: {id: Number, name: String},
    display_picture: String,
    preferred_languaage: {id: Number, name: String},
    created_at: Number,
    updated_at: Number
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