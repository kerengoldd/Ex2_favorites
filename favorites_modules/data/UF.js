const mongoose = require('mongoose'),
    schema = mongoose.Schema;
var Ufavorites = new schema({
    Name:{type:String},
    Rating:{type:Number},
    Month:{type:String},
    Category:{type:String}
});
const uf = mongoose.model('uf',Ufavorites);

exports.model = uf;
exports.Ufavorites = Ufavorites;