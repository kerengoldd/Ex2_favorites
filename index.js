'use strict';
const express = require('express'),
    app = express(),
    favoritFunction = require('./favorites_modules/index'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use('/assets',express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.get('/getAllFavorites',(req,res) => {
    res.status(200).json(favoritFunction.getAllFavorites());
});

app.post('/getFavoritesOfUser',(req ,res) => {
        res.status(200).json(favoritFunction.getFavoritesOfUser(req.body.user));
});
app.get('/API',(req ,res) => {
    res.status(200).send();
});

app.post('/getFavoritesOfMonthByCategory',(req,res) =>{
    res.json(favoritFunction.getFavoritesOfMonthByCategory(req.body.month, req.body.category));
});

app.all('*',(req,res) =>{
    res.send(`
        <!doctype html>
        <html>
        <head>
        <title>Wrong URL</title>
        <link href=assets/style.css rel=stylesheet>
        </head>
        <body>
        <h1>Your URL Wrong</h1>
        <p>## [Ex2_favorites](https://kerengoldd.github.io/Ex2_favorites/)
Web service to VOD favorites

* [API](https://kerengoldd.github.io/Ex2_favorites/)

* [GitHub](https://github.com/kerengoldd/Ex2_favorites)

* [Heroku](https://favorites1.herokuapp.com/API)

# API

## /getAllFavorites
## Verb: GET

return all the favorites

* To see all the favorites /getAllFavorites

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

## /getFavoritesOfUser
## Verb:POST

get user name and rerturn all his favorites

* To get the favorite of someone /getFavoritesOfUser(send his name)

Example:

[{"Name":"wolverine","Rating":40,"Month":"October","Category":"Action"},{"Name":"XXX","Rating":5,"Month":"February","Category":"Action"},{"Name":"Ted","Rating":6,"Month":"April","Category":"Comedy"},{"Name":"Hangover","Rating":2,"Month":"Juny","Category":"Comedy"},{"Name":"Avatar","Rating":6,"Month":"July","Category":"Sci-fi"}]

## /getFavoritesOfMonthByCategory
## Verb:POST

get month and category and return all the favorites by the category in the month

* To get the bests of anycategory by month ##/getFavoritesOfMonthByCategory(month,category)

Example:

[{"Name":"Hary potter","Rating":7,"Month":"March","Category":"Children"}]

</p>
        <img src="assets/keren.jpg">
        </body>
        </html>`);
})

app.listen(port);
console.log('server is on');
console.log(`listening on port' ${port}`);
