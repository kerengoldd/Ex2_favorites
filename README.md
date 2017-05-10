## [Ex2_favorites](https://kerengoldd.github.io/Ex2_favorites/)
Web service to VOD favorites

* [API](https://kerengoldd.github.io/Ex2_favorites/)

* [GitHub](https://github.com/kerengoldd/Ex2_favorites)

* [Heroku](https://favorites1.herokuapp.com/getAllFavorites)

# API
## Verb: GET

* To see all the favorites -- /getAllFavorites

Example:

{
user: "keren",
Ufavorites: [
{
Name: "50 shades",
Rating: 1,
Month: "March",
Category: "Romance"
},
{
Name: "Spongbob",
Rating: 12,
Month: "March",
Category: "children"
},
{
Name: "Aladin",
Rating: 2,
Month: "Aprirl",
Category: "children"
},
{
Name: "Charly & half",
Rating: 3,
Month: "August",
Category: "Israeli"
},
{
Name: "Grease",
Rating: 8,
Month: "July",
Category: "musical"
}

## Verb:POST

* To get the favorite of someone ##/getFavoritesOfUser(send his name)

Example:

[{"Name":"wolverine","Rating":40,"Month":"October","Category":"Action"},{"Name":"XXX","Rating":5,"Month":"February","Category":"Action"},{"Name":"Ted","Rating":6,"Month":"April","Category":"Comedy"},{"Name":"Hangover","Rating":2,"Month":"Juny","Category":"Comedy"},{"Name":"Avatar","Rating":6,"Month":"July","Category":"Sci-fi"}]

## Verb:POST

* To get the bests of anycategory by month ##/getFavoritesOfMonthByCategory(month,category)

[{"Name":"Hary potter","Rating":7,"Month":"March","Category":"Children"}]


[git](https://github.com/kerengoldd/Ex2_favorites/blob/master/README.md)
