const favorites = require('./data/jsonfavorites.json');

module.exports = class favorite {

//get all users && they favorites
    static getAllFavorites() {
        return favorites;
    }

// get favorites by user name
    static getFavoritesOfUser(User) {
        //var newArr = [];
        for (var i = 0; i < favorites.length; i++) {
            if (favorites[i].user === User) {
                return favorites[i].Ufavorites;
            }
        }
        return {"erroe": "not exist"};
    }

// get the favorites of month by category (children is the best)
    static getFavoritesOfMonthByCategory(month, category) {
        var bestsOfMonth = [];
        for (var i = 0; i < favorites.length; i++) {
            for (let j = 0; j < favorites[i].Ufavorites.length; j++) {
                if (favorites[i].Ufavorites[j].Month === month && favorites[i].Ufavorites[j].Category == category)
                    bestsOfMonth.push(favorites[i].Ufavorites[j]);
                else
                if (bestsOfMonth == null || bestsOfMonth == [])
                    return {"Errorrrr": "Not found any movie at this category or at this month"};
            }
        }
        return bestsOfMonth;
    }
};