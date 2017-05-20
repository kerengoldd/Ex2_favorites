const mongoose = require('mongoose'),
    consts = require('../consts'),
    favorites = require('./data/favoritesList');
uf = require('./data/favoritesList');
mongoose.Promise = global.Promise;
mongoose.connect(consts.MLAB_KEY);
mongoose.connection.on('error',
    (err) => console.log(`Connection error: ${err}`));
mongoose.connection.on('open',
    () => console.log('Connected'));

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
    static getFavoritesOfMonthByCategory(month, category, res) {
        favorites.find({}, {"_id": 0},
            (err, favorites) => {
                let result = [];
                for (let i = 0; i < favorites.length; i++) {
                    for (let j = 0; j < favorites[i].Ufavorites.length; j++) {
                        if (favorites[i].Ufavorites[j].Category == category && favorites[i].Ufavorites[j].Month == month) {
                            result.push(favorites[i].Ufavorites[j].Name);
                        }
                    }
                }
                res.status(200).json(`The best of the ${month} by the Category ${category} is: ${result}`);
            }
        );
    }
};