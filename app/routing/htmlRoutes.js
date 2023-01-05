//serves public pages
const htmlRoutes = require('express').Router();

htmlRoutes.get('/', (req,res)=>{
    res.render('index');
});

htmlRoutes.get('/river', (req,res)=>{
    res.render('river');
});

htmlRoutes.get('/changeProcess', (req,res)=>{
    res.render('change');
});

htmlRoutes.get('/aces', (req,res)=>{
    res.render('aces');
});

htmlRoutes.get('/acesQuiz', (req,res)=>{
    res.render('acesQuiz');
});
htmlRoutes.get('/errorRoute', (req,res)=>{
    res.render('errorRoute');
});

module.exports = htmlRoutes;


