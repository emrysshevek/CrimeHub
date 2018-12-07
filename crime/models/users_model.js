var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    crimes: [Object]
    hashed_password: String
});
var CrimeSchema = new Schema({
    weapons: [String],
    targets: [String],
    location: String,
    date: Date,
    bounty: String,
    value: Number
})
mongoose.model('User', UserSchema);
mongoose.model('Crime', UserSchema);
