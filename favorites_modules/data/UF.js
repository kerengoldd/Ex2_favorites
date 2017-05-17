const mongoose = require('mongoose'),
    schema = mongoose.Schema;
var Ufavorites = new schema({
    Name:String,
    Rating:Number,
    Month:String,
    Category:String
});
module.exports = Ufavorites;