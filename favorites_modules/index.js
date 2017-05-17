const mongoose = require('mongoose'),
    consts = require('../consts'),
    favorites = require('./data/favoritesList'),
    uf = require('./data/UF').model;
mongoose.Promise = global.Promise;
mongoose.connect(consts.MLAB_KEY);
mongoose.connection.on('error',
    (err) => console.log(`Connection error: ${err}`));
mongoose.connection.on('open',
    ()    => console.log('Connected'));
module.exports = class Favorite {

//get all users && they favorites
    static getAllFavorites() {
        return favorites.find();
    }
// get favorites by user name
    static getFavoritesOfUser(User) {
        return favorites.findOne({user: User});
    }
// get the favorites of month by category (children is the best)
    static getFavoritesOfMonthByCategory(month, category) {
console.log(uf);
   return  uf.find({ Month: month , Category: category})
            ;
    }
};