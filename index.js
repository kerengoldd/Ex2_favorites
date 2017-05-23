'use strict';
const express = require('express'),
    app = express(),
    favoritFunction = require('./favorites_modules/index'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use('/assets',express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.get('/', function (req, res) {
    res.redirect(`https://kerengoldd.github.io/Ex2_favorites/`);
});

app.get('/getAllFavorites',(req,res) => {
    favoritFunction.getAllFavorites().then(docs => res.json(docs));
});

app.post('/getFavoritesOfUser',(req ,res) => {
        favoritFunction.getFavoritesOfUser(req.body.user).then(docs => res.json(docs));
});

app.post('/getFavoritesOfMonthByCategory',(req,res) =>{
    favoritFunction.getFavoritesOfMonthByCategory(req.body.month, req.body.category ,res);
    //.then(docs => res.json(docs));
});

app.post('/getByRating',(req,res)=>{
    console.log("getByRating before");
    favoritFunction.getByRating(req,res,req.body.mini, req.body.max);
    console.log("getByRating after");

    //.then(docs => res.json(docs));
});

app.all('*',(req,res) =>{
    // res.sendFile(`${__dirname}/index.html`);
    res.redirect(`https://kerengoldd.github.io/Ex2_favorites/`);

})

app.listen(port);
console.log('server is on');
console.log(`listening on port' ${port}`);
