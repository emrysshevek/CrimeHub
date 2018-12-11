var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    crimes: [{
        operation: String,
        weapons: String,
        targets: String,
        location: String,
        date: Date,
        bounty: String,
        value: Number
    }],
    hashed_password: String
});
mongoose.model('User', UserSchema);
