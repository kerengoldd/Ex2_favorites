const mongoose = require('mongoose'),
    consts = require('../consts'),
    favorites = require('./data/favoritesList');
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
     //   for (var i=0 ; i < favorites.length;i++){

  var doc = favorites.find({'Ufavorites.Month' :month},{"Ufavorites.$":1});
  return doc.find({'Ufavorites.Category':category});
    }
};