const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model("User", SignupSchema);
module.exports = UserModel;
