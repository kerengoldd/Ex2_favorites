const mongoose = require('mongoose'),
    consts = require('../consts'),
    favorites = require('./data/favoritesList');

mongoose.Promise = global.Promise;
mongoose.connect(consts.MLAB_KEY);
mongoose.connection.on('error',
    (err) => console.log(`Connection error: ${err}`));
mongoose.connection.on('open',
    ()    => console.log('Connected'));
mongoose.Promise = global.Promise;
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
     return  favorites.find({
             $and: [
                 {'Ufavorites.Month': month},
                 {'Ufavorites.Category': category}]
         }
            ,{"_id":0,"user":1,"Ufavorites.Name":1,"Ufavorites.Month": 1 ,"Ufavorites.Category": 1});

    }
};