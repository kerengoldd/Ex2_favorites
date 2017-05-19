const mongoose = require('mongoose'),
    consts = require('../consts'),
    favorites = require('./data/favoritesList');
    uf = require('./data/favoritesList');
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
        mongoose.disconnect();
    }

// get the favorites of month by category (children is the best)
    static getFavoritesOfMonthByCategory(month, category,res) {
        // return favorites.aggregate([{$match:{'Ufavorites.Month':month}},
        //      {$unwind:"$Ufavorites"},
        //   {$match:{'Ufavorites.Month':month}}]);
         //return uf.find({Month:month,Category:category});
       // return  docs.aggregate({$match:{"Ufavorites.Category":category}},
        //    {$unwind:"$Ufavorites"},
         //   {$match:{"Ufavorites.Category":category}});
        favorites.find({'Ufavorites.Month': month, 'Ufavorites.Category':category},
            (err,favorites)=>{
            if (err) console.log("bhkn");

            //favorites.find({'Ufavorits.Category':category});
                res.status(200).json(favorites);
            });

            // {"Ufavorites.$": 1});
        //return favorites.find({'Ufavorites.Month':month});

       // mongoose.disconnect();
    }
};