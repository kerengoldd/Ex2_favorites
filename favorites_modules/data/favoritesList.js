const mongoose = require('mongoose'),
    schema = mongoose.Schema;
    Ufavorites = require('./UF.js');
mongoose.Promise = global.Promise;
    favoriteSchema = new schema({
        user:{type:String, index:1, required:true, unique:true},
        Ufavorites:[Ufavorites.Ufavorites]
    },{collection:'favorites'});

    const favorites = mongoose.model('favorites',favoriteSchema);
    module.exports = favorites;