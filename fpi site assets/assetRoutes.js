//serves assets and links
const path = require('path');
const assets = require('express').Router();

assets.get('/img/:image', (req,res)=>{
    res.sendFile(path.join(__dirname, `../public/img/${req.params.image}`));
});
assets.get('/css/:css', (req,res)=> {
    res.sendFile(path.join(__dirname, `../public/css/${req.params.css}`));
});
assets.get('/js/:javascript', (req,res)=>{
    res.sendFile(path.join(__dirname, `../public/js/${req.params.javascript}`));
});

module.exports = assets;