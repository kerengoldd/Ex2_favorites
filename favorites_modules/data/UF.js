const mongoose = require('mongoose'),
    schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var Ufavorites = new schema({
    Name:{type:String},
    Rating:{type:Number},
    Month:{type:String},
    Category:{type:String}
});
module.exports = Ufavorites;
