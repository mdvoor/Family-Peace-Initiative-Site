//servers error page
const errorRoute = require('express').Router();

errorRoute.get('*', (req,res)=>{
   res.render('error');
});

module.exports = errorRoute;